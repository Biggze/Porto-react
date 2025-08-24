import React from 'react';
import { Film, PlayCircle,Tool, } from 'react-feather';
import { motion } from 'framer-motion';
import portfolioData from '../data/Data.js'; // Pastikan path ini benar

const Editing = () => {
    // Varian animasi untuk container dan item
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Jeda antar item
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
    
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm"
        >
            <div className="pb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                    <Film size={28} className="mr-3" />
                    Video Editing
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1">A collection of my video projects, showcasing my editing skills.</p>
            </div>

            {/* Konten yang akan di-blur */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8 blur-md pointer-events-none"
            >
                {portfolioData.editingProjects.map(project => (
                    <motion.div variants={itemVariants} key={project.id} className="group block">
                        <div className="relative rounded-xl overflow-hidden mb-4">
                            <img 
                                src={project.thumbnailUrl} 
                                alt={`Thumbnail for ${project.title}`} 
                                className="w-full h-auto" 
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                <PlayCircle size={64} className="text-white opacity-50" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.tools.map(tool => (
                                <span key={tool} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Lapisan Overlay untuk Maintenance */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center text-center rounded-2xl"
            >
                <Tool size={48} className="text-gray-500 dark:text-gray-400 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Under Construction</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">This page is currently being updated. Please check back soon!</p>
            </motion.div>
        </motion.div>
    );
};



export default Editing;