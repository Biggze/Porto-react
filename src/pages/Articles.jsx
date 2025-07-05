import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'react-feather';
import portfolioData from '../data/Data.js';

const Articles = () => {
    return (
        <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm">
            <div className="pb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                    <FileText size={28} className="mr-3" />
                    Articles
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1">A collection of my thoughts and writings on technology and development.</p>
            </div>

            <div className="space-y-8">
                {portfolioData.articles.map(article => (
                    <Link to={`/articles/${article.slug}`} key={article.id} className="block group">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                            <div className="md:col-span-1">
                                <img src={article.image} alt={`Thumbnail for ${article.title}`} className="rounded-lg w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="md:col-span-3">
                                <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold">{article.category}</p>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 group-hover:text-blue-500 transition-colors">{article.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">{article.summary}</p>
                                <div className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                                    <span>{article.date}</span>
                                    <span className="mx-2">⋅</span>
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Articles;