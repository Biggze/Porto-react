// const NavItem = ({ icon, label, page, activePage, onNavigate }) => {
//     const isActive = activePage === page;
//     return (
//       <li>
//         <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(page); }} className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors duration-200 ${isActive ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}`}>
//           <div className="flex items-center space-x-3">{icon}<span>{label}</span></div>
//           {isActive && <ArrowRight size={20} />}
//         {/* </a> */}
//       </li>
//     );
//   };

// export default NavItem;