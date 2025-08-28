// src/pages/Home.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code, Server } from 'react-feather';
import portfolioData from '../data/Data'; // Pastikan path ini benar

// Fungsi Helper untuk mendapatkan path ikon berdasarkan nama skill
const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase().replace(/\s+/g, '');
    const iconMap = {
        'laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
        'github': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        'tailwindcss': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        'bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
        'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'reactjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
        'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
        'phyton': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'php': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        'adobepremierepro': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg',
        'aftereffect': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg',
        'davinciresolve': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/davinciresolve/davinciresolve-plain.svg',
        'capcut': null 
    };
    return iconMap[name] || null;
};

// Varian animasi untuk container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08, // Jeda antar item
        },
    },
};

// PERUBAHAN: Varian animasi baru untuk tag skill (initial load + hover)
const skillTagVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
        y: -5,
        scale: 1.1,
        transition: { type: "spring", stiffness: 300 }
    }
};

// PERUBAHAN: Varian animasi baru HANYA untuk ikon di dalam tag
const skillIconVariants = {
    hover: {
        rotate: 360,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
};

// Varian animasi untuk teks "mengetik"
const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.04,
        },
    },
};

const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
};


const Home = () => {
    const line1 = `Hi, I'm ${portfolioData.profile.name}`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm"
        >
            <div className="pb-8 border-b border-gray-200 dark:border-gray-700">
                <motion.h2 
                    className="text-4xl font-bold text-gray-900 dark:text-white"
                    variants={sentenceVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {line1.split("").map((char, index) => (
                        <motion.span key={char + "-" + index} variants={letterVariants}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h2>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mt-3"
                >
                    <div className="flex items-center"><MapPin size={16} className="mr-2" /><span>Based in {portfolioData.profile.location}</span></div>
                    <div className="flex items-center"><span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span><span>{portfolioData.profile.status}</span></div>
                </motion.div>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                    {portfolioData.profile.homeBio}
                </motion.p>
            </div>
            
            <div className="py-8 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code size={24} className="mr-3" />Skills</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">My professional skills.</p>

                <motion.ul 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-3"
                >
                    {portfolioData.skills.map((skill, index) => {
                        const iconSrc = getSkillIcon(skill);
                        return (
                            <motion.li
                                key={index}
                                variants={skillTagVariants}
                                whileHover="hover"
                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg flex items-center cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:text-white transition-colors duration-200"
                            >
                                {iconSrc && (
                                    <motion.img
                                        src={iconSrc}
                                        alt={`${skill} icon`}
                                        className="w-5 h-5 mr-2"
                                        variants={skillIconVariants}
                                    />
                                )}
                                {skill}
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>
            <div className="py-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Server size={24} className="mr-3" />Service</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    I work as a freelancer to develop exceptional websites for brands, companies, institutions, and startups, focusing on strategic web solutions.
                </p>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                    className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl"
                >
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Let's work together!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        Feel free to email me to see how can we collaborate.
                    </p>
                    <a href="/contact">
                        <button className="bg-gray-800 dark:bg-gray-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200">
                            Contact me
                        </button>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;
