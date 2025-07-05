import React from 'react';
import { MapPin, Code, Server } from 'react-feather';
// Pastikan path ini benar sesuai struktur folder Anda
import portfolioData from '../data/Data'; 

const Home = () => (
    <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm">
      <div className="pb-8 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Hi, I'm {portfolioData.profile.name}</h2>
        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mt-3">
          <div className="flex items-center"><MapPin size={16} className="mr-2" /><span>Based in {portfolioData.profile.location}</span></div>
          <div className="flex items-center"><span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span><span>{portfolioData.profile.status}</span></div>
        </div>
        <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">{portfolioData.profile.homeBio}</p>
      </div>
      
      <div className="py-8 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Code size={24} className="mr-3" />Skills</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">My professional skills.</p>
        
        {/* Wrapper untuk efek scrolling */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          
          {/* PERUBAHAN: hover:[animation-play-state:paused] dipindahkan ke ul */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll hover:[animation-play-state:paused]">
            {portfolioData.skills.map((skill, index) => (
              <li key={index} className="flex-shrink-0 flex items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">
                <span>{skill}</span>
              </li>
            ))}
          </ul>
          
          {/* Duplikat daftar untuk menciptakan efek looping yang mulus */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll hover:[animation-play-state:paused]" aria-hidden="true">
            {portfolioData.skills.map((skill, index) => (
              <li key={index + portfolioData.skills.length} className="flex-shrink-0 flex items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg">
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Server size={24} className="mr-3" />Service</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">I work as a freelancer to develop exceptional websites for brands, companies, institutions, and startups, focusing on strategic web solutions.</p>
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Let's work together!</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">I'm open for freelance projects, feel free to email me to see how can we collaborate.</p>
          <a href="/contact"><button className="bg-gray-800 dark:bg-gray-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200">Contact me</button></a>
        </div>
      </div>
    </div>
  );

export default Home;