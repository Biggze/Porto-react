// src/components/CertificateModal.jsx

import React from 'react';
import { X } from 'react-feather';

const CertificateModal = ({ cert, onClose }) => {
  // Jangan render apa-apa jika tidak ada sertifikat yang dipilih
  if (!cert) return null;

  return (
    // Overlay latar belakang
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
    >
      {/* Kontainer konten modal, cegah penutupan saat diklik di dalam */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6 md:p-8"
      >
        {/* Tombol Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white">
          <X size={24} />
        </button>

        {/* Judul Kegiatan */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{cert.title}</h2>

        {/* Gambar Sertifikat */}
        <div className="mb-6">
          <img src={cert.imageUrl} alt={`Sertifikat untuk ${cert.title}`} className="w-full h-auto rounded-md shadow-md" />
        </div>

        {/* Deskripsi */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Deskripsi</h3>
          <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{cert.description}</p>
        </div>

        {/* Jobdesk */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Jobdesk/Tanggung Jawab</h3>
          <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{cert.jobdesk}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;