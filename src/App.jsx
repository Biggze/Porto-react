// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu as MenuIcon } from 'react-feather'; // Impor ikon Menu
import { AnimatePresence } from 'framer-motion';

import Sidebar from './pages/Sidebar.jsx';
import Home from './pages/Home_temp.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';

import Contact from './pages/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Certificates from './pages/Certificates.jsx';
import Editing from './pages/Editing.jsx';

export default function App() {
  const [theme, setTheme] = useState('light');
  // State untuk mengontrol visibilitas sidebar di mobile
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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

  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Fungsi untuk menutup sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 min-h-screen">
        <div className="container mx-auto p-4 md:p-8">

          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-md shadow-md"
            aria-label="Open sidebar"
          >
            <MenuIcon size={24} />
          </button>

          {isSidebarOpen && (
            <div
              onClick={closeSidebar}
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            ></div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <Sidebar
              theme={theme}
              onThemeToggle={handleThemeToggle}
              isSidebarOpen={isSidebarOpen} // kirim state
              onClose={closeSidebar}       // kirim fungsi close
            />

            {/* Kolom untuk Konten Utama */}
            <main className="lg:col-span-9">
               <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/certificates" element={<Certificates />} />
                {/* <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:slug" element={<ArticleDetail />} /> */}
                <Route path="/editing" element={<Editing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Home />} /> {/* Fallback route */}
              </Routes>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}