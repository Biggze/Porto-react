import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'react-feather'; 

const NavItem = ({ icon, label, to, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        onClick={onClick} 
        className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors duration-200 ${
          isActive
            ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold'
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
        }`}
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

export default NavItem;