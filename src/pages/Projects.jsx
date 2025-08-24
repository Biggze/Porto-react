// src/pages/Projects.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Lock } from 'react-feather'; 
import portfolioData from '../data/Data.js'; 

// Varian animasi untuk container dan item
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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
            ease: "easeOut"
        },
    },
};

const Projects = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm"
    >
        <div className="pb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Several projects that I have worked on.</p>
        </div>
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            {portfolioData.projects.map(project => (
                <motion.div key={project.id} variants={itemVariants}>
                    <Link to={`/projects/${project.slug}`} className="group block">
                        <div className="relative rounded-xl overflow-hidden mb-4">
                            <motion.img 
                                src={project.image} 
                                alt={`Gambar Proyek ${project.title}`} 
                                className="w-full h-50 object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">{project.description}</p>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
);

export default Projects;
