// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Impor komponen halaman dan sidebar
import Sidebar from './pages/Sidebar.jsx';
import Home from './pages/Home_temp.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Articles from './pages/Articles.jsx';
import ArticleDetail from './pages/ArticleDetail.jsx';
import Contact from './pages/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Certificates from './pages/Certificates.jsx';

export default function App() {
const [theme, setTheme] = useState('light');
  // useEffect untuk menerapkan kelas 'dark' pada elemen <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Fungsi untuk mengganti tema
  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 min-h-screen">
        <div className="container mx-auto p-4 md:p-8">
          {/* INI BAGIAN KUNCI UNTUK RESPONSIVE LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Kolom untuk Sidebar */}
            <Sidebar 
              theme={theme}
              onThemeToggle={handleThemeToggle}
              
            />
            
            {/* Kolom untuk Konten Utama */}
            <main className="lg:col-span-9">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:slug" element={<ArticleDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Home />} /> {/* Fallback route */}
              </Routes>
            </main>

          </div>
        </div>
      </div>
    </Router>
  );
}