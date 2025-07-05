import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'react-feather';
import portfolioData from '../data/Data.js';

const ArticleDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const article = portfolioData.articles.find(p => p.slug === slug);

    if (!article) {
        return (
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Artikel Tidak Ditemukan</h2>
                <button onClick={() => navigate('/articles')} className="mt-4 text-blue-500 hover:underline">
                    Kembali ke daftar artikel
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm">
            <div className="pb-6">
                <button onClick={() => navigate(-1)} className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors mb-6">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Articles
                </button>
                <p className="text-base font-semibold text-blue-500 dark:text-blue-400">{article.category}</p>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">{article.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-4">
                    <div className="flex items-center"><Calendar size={14} className="mr-1.5" /><span>{article.date}</span></div>
                    <div className="flex items-center"><Clock size={14} className="mr-1.5" /><span>{article.readTime}</span></div>
                </div>
            </div>

            <hr className="my-6 border-dashed border-gray-200 dark:border-gray-700" />

            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed">
                {article.content.map((htmlContent, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: htmlContent }} />
                ))}
            </div>
        </div>
    );
};

export default ArticleDetail;