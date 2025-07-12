import React from 'react';
import { Link } from 'react-router-dom';
// PERBAIKAN: Mengganti ikon kembali ke react-feather agar konsisten
// Jika Anda ingin menggunakan phosphor-react, jalankan: npm install phosphor-react
import { Star, Lock } from 'react-feather'; 

// PERBAIKAN: Memperbaiki path impor data
import portfolioData from '../data/Data.js'; 

const Projects = () => (
    <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm">
        <div className="pb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Several projects that I have worked on.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map(project => (
                <Link to={`/projects/${project.slug}`} key={project.id} className="group block">
                    <div className="relative rounded-xl overflow-hidden mb-4">
                        <img src={project.image} alt={`Gambar Proyek ${project.title}`} className="w-full h-50 transform group-hover:scale-105 transition-transform duration-300" />

                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">{project.description}</p>
                </Link>
            ))}
        </div>
    </div>
);

export default Projects;