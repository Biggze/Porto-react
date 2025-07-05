import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 

// Impor semua komponen Anda
import Home from './pages/home.jsx';
import Sidebar from './pages/Sidebar.jsx';
import About from './pages/About.jsx';
import Achievements from './pages/Achievements.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Contact from './pages/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Articles from './pages/Articles.jsx';
import ArticleDetail from './pages/ArticleDetail.jsx';

export default function App() {
  // State untuk tema (terang/gelap)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

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

  // Fungsi untuk mengganti tema, akan dioper ke Sidebar
  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Tag <BrowserRouter> sudah tidak ada di sini lagi
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Sidebar 
            theme={theme}
            onThemeToggle={handleThemeToggle}
          />
          <main className="lg:col-span-9">
            <Routes>

              <Route path="/" element={<Home />} />
           
              <Route path="/about" element={<About />} />
              {/* <Route path="/achievements" element={<Achievements />} /> */}
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:slug" element={<ArticleDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
