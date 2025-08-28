
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Impor motion dari framer-motion
import { Briefcase, Award, Download, ChevronDown, ChevronUp } from 'react-feather';
import portfolioData from '../data/Data'; // Pastikan path ini benar

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Jeda antar item yang dianimasikan
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
    },
};

const About = () => {
    const [openResponsibilities, setOpenResponsibilities] = useState({});
    const toggleResponsibilities = (id) => {
        setOpenResponsibilities(prev => ({...prev, [id]: !prev[id]}));
    };

    return (
        // Bungkus seluruh halaman dengan motion.div untuk transisi halaman
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm">
                {/* Gunakan containerVariants untuk menganimasikan anak-anaknya secara berurutan */}
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    
                    {/* About Section */}
                    <motion.div variants={itemVariants} className="pb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">A short story of me</p>
                        <hr className="my-6 border-dashed border-gray-200 dark:border-gray-700" />
                        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                            {portfolioData.profile.aboutBio.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                    </motion.div>

                    {/* Career Section */}
                    <motion.div variants={itemVariants} className="py-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Briefcase size={24} className="mr-3" />Career</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">My professional career journey.</p>
                        <div className="space-y-4">
                            {portfolioData.career.map(job => (
                                <div key={job.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                                    <div className="flex items-start space-x-4">
                                        <img src={job.logo} alt={`Logo ${job.company}`} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-900 dark:text-white">{job.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{job.company} ⋅ {job.location}</p>
                                            <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-500 mt-2">
                                                <span>{job.duration}</span><span>⋅</span><span>{job.type}</span>
                                            </div>
                                            {job.responsibilities.length > 0 && (
                                                <>
                                                    <button onClick={() => toggleResponsibilities(job.id)} className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 mt-2 hover:text-blue-500">
                                                        {openResponsibilities[job.id] ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                                        <span>{openResponsibilities[job.id] ? 'Hide' : 'Show'} responsibilities</span>
                                                    </button>
                                                    {openResponsibilities[job.id] && (
                                                        <div className="mt-2 pl-1 text-sm text-gray-600 dark:text-gray-400">
                                                            <ul className="list-disc list-inside space-y-1">
                                                                {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div variants={itemVariants} className="py-8 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                                    <Award size={24} className="mr-3" />
                                    Education
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">My educational journey.</p>
                            </div>
                            <div className="flex space-x-2">
                                <a href="#" download="#" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                                    <Download size={16} />
                                    <span>Download Portfolio</span>
                                </a>
                                <a href="CV/Adel Noval.pdf" download="Adel Noval.pdf" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                                    <Download size={16} />
                                    <span>Download Resume</span>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                            <div className="flex items-start space-x-4">
                                <img src={portfolioData.education.logo} alt={`Logo ${portfolioData.education.university}`} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                                <div className="flex-grow">
                                    <h4 className="font-bold text-gray-900 dark:text-white">{portfolioData.education.university}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{portfolioData.education.degree}</p>
                                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-500 mt-2">
                                        <span>{portfolioData.education.duration}</span>
                                        <span>⋅</span>
                                        <span>{portfolioData.education.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;


