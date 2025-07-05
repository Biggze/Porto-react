import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { 
    Home as HomeIcon, User, Award, Briefcase, BarChart2, 
    MessageSquare, Mail, ArrowRight, Sun, Moon 
} from 'react-feather';
import portfolioData from '../data/Data.js'; // Pastikan path ini benar

const NavItem = ({ icon, label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link 
        to={to} 
        className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors duration-200 ${isActive ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}`}
      >
        <div className="flex items-center space-x-3">
          {icon}
          <span>{label}</span>
        </div>
        {isActive && <ArrowRight size={20} />}
      </Link>
    </li>
  );
};

const Sidebar = ({ theme, onThemeToggle }) => {
    const navItems = [
      { icon: <HomeIcon size={20} />, label: 'Home', to: '/' },
      { icon: <User size={20} />, label: 'About', to: '/about' },
      // { icon: <Award size={20} />, label: 'Achievements', to: '/achievements' },
      { icon: <Briefcase size={20} />, label: 'Projects', to: '/projects' },
      { icon: <BarChart2 size={20} />, label: 'Dashboard', to: '/dashboard' },
       { icon: <Briefcase size={20} />, label: 'Articles', to: '/articles' },
      { icon: <Mail size={20} />, label: 'Contact', to: '/contact' },
    ];
  
    return (
      <aside className="lg:col-span-3 sticky top-8 self-start">
            <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-6 rounded-2xl shadow-sm">
                <div className="flex flex-col items-center text-center">
                    <img className="w-24 h-24 rounded-full mb-4 object-cover" src="img/me.jpg" alt={`Foto profil ${portfolioData.profile.name}`} />
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">{portfolioData.profile.name}<svg className="w-5 h-5 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{portfolioData.profile.handle}</p>
                </div>
                <div className="flex items-center space-x-2 mt-6">
                    <button className="w-full bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-600">Hire me</button>
                    <button onClick={onThemeToggle} className="w-auto border border-gray-300 dark:border-gray-600 p-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>
                <nav className="mt-5"><ul className="space-y-2">{navItems.map(item => <NavItem key={item.label} {...item} />)}</ul></nav>
                <div className="mt-2 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                    <p className="text-xs text-gray-500">COPYRIGHT © 2025</p>
                    <p className="text-xs text-gray-500">{portfolioData.profile.name}. All rights reserved.</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;