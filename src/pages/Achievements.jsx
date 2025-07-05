// src/pages/Achievements.jsx

import React, { useState } from 'react';
import { Search, ChevronDown, Award as AwardIcon, X } from 'react-feather';
// Pastikan path ini benar sesuai struktur folder Anda
import portfolioData from '../data/Data'; 

// Komponen Modal
const AchievementModal = ({ achievement, onClose }) => {
    if (!achievement) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 transition-opacity duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] transform transition-transform duration-300 scale-100">
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{achievement.title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-white">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                    <img src={achievement.modalImageSrc} alt={`Sertifikat ${achievement.title}`} className="w-full h-auto rounded-lg mb-4" />
                    <div>
                        {achievement.credentialId && <p className="text-xs text-gray-400 dark:text-gray-500">Credential ID: {achievement.credentialId}</p>}
                        <h4 className="font-bold text-xl text-gray-900 dark:text-white mt-1">{achievement.title}</h4>
                        <p className="text-md text-gray-600 dark:text-gray-400 mt-1">{achievement.issuer}</p>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">Issued on {achievement.date}</p>
                    </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-b-2xl text-right">
                    <button onClick={onClose} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition">Tutup</button>
                </div>
            </div>
        </div>
    );
};


const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    return (
        <>
            <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm">
                
                {/* Header Section */}
                <div className="pb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Achievements</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">A collection of certificates and badges that I have earned throughout my professional journey.</p>
                </div>

                {/* Filter and Search Section */}
                <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
                    <div className="relative w-full md:w-auto flex-grow md:flex-grow-0">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Total: {portfolioData.achievements.length}</span>
                        <div className="relative">
                            <select className="pl-4 pr-10 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none">
                                <option>Filter achievements...</option>
                                <option>Sertifikat</option>
                                <option>Lencana</option>
                                <option>Penghargaan</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.achievements.map((achievement) => (
                        <div 
                            key={achievement.id} 
                            className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedAchievement(achievement)}
                        >
                            <div className="relative mb-3">
                                <img src={achievement.imageSrc} alt={`Sertifikat ${achievement.title}`} className="rounded-lg w-full h-auto" />
                                <div className="absolute top-2 right-2 flex space-x-1">
                                    <span className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-1.5 rounded-full">
                                        <img src={achievement.logo} alt={`Logo ${achievement.issuer}`} className="w-5 h-5 rounded-full" />
                                    </span>
                                    {achievement.badge === 'award' && (
                                        <span className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-1.5 rounded-full">
                                            <AwardIcon className="w-5 h-5 text-yellow-500" />
                                        </span>
                                    )}
                                </div>
                            </div>
                            {achievement.credentialId && <p className="text-xs text-gray-400 dark:text-gray-500">{achievement.credentialId}</p>}
                            <h4 className="font-bold text-gray-900 dark:text-white mt-1">{achievement.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{achievement.issuer}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Issued on</p>
                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal akan ditampilkan jika ada achievement yang dipilih */}
            {selectedAchievement && (
                <AchievementModal 
                    achievement={selectedAchievement} 
                    onClose={() => setSelectedAchievement(null)} 
                />
            )}
        </>
    );
};

export default Achievements;
