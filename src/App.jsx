import React, { useState, useEffect } from 'react';
// PERUBAHAN: Impor Routes dan Route
import { Routes, Route } from 'react-router-dom'; 

// PERBAIKAN: Impor komponen Sidebar dan About
import Sidebar from './components/sidebar.jsx';          // Pastikan path ini benar
import About from './pages/About.jsx';     
import Home from './pages/home.jsx';    // Pastikan path ini benar
import Projects from './pages/Projects.jsx';
import Achievements from './pages/Achievements.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  // State untuk tema tetap ada
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

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

  // Fungsi renderPage tidak lagi diperlukan karena kita menggunakan <Routes>

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar sekarang tidak lagi memerlukan props navigasi */}
          <Sidebar 
            theme={theme}
            onThemeToggle={handleThemeToggle}
          />
          <main className="lg:col-span-9">
            {/* Gunakan <Routes> untuk mendefinisikan halaman Anda */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/achievements" element={<Achievements />} /> 
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/projects/:projectSlug" element={<ProjectDetail />} /> */}
              <Route path="/contact" element={<Contact />} />
              
              {/* Rute default jika tidak ada yang cocok */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}