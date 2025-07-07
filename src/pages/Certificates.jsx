// src/pages/Certificates.jsx

import React, { useState } from 'react';
import CertificateModal from '../components/CertificateModal.jsx';
import portfolioData from '../data/Data.js';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sertifikat</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Klik pada gambar untuk melihat detail.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          
          {portfolioData.certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="overflow-hidden rounded-lg shadow-md mb-2">
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Area Teks di Bawah Gambar */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {cert.role}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cert.issuer}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </>
  );
};

export default Certificates;