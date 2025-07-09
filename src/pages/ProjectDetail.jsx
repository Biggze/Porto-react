import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Link as LinkIcon, GitHub } from 'react-feather';
import portfolioData from '../data/Data.js';

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    // Menemukan proyek berdasarkan slug
    const project = portfolioData.projects.find(p => p.slug.toLowerCase() === slug.toLowerCase());

    if (!project) {
        return (
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Proyek Tidak Ditemukan</h2>
                <button onClick={() => navigate('/projects')} className="mt-4 text-blue-500 hover:underline">
                    Kembali ke daftar proyek
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm">
            {/* ... (kode bagian atas lainnya) */}
            <div className="pb-6">
          <button onClick={() => navigate(-1)} className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back
          </button>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
            </div>
            <hr className="my-6 border-dashed border-gray-200 dark:border-gray-700" />
            <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
                <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">Tech Stack:</span>
                    {project.tech.map((tech, index) => (
                        <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    <a href={project.sourceCodeUrl} className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-500"><GitHub size={16} className="mr-2" />Source Code</a>
                    <span className="text-gray-300 dark:text-gray-600">|</span>
                    <a href={project.liveDemoUrl} className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-500"><LinkIcon size={16} className="mr-2" />Live Demo</a>
                </div>
            </div>
            
             <div className="mb-8">
                <img src={project.image} alt={`Showcase ${project.title}`} className="w-full h-auto rounded-xl shadow-md" />
            </div>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Introduction</h3>
                 <p className="text-gray-500 dark:text-gray-400 mt-1">{project.description}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8">Features</h3>
                <ul>
                    <li>Feature one of the project.</li>
                    <li>Feature two with more details.</li>
                     <li>Another important feature.</li>
                    </ul>
                </div>
                </div>
    );
};

export default ProjectDetail;