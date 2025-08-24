import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'react-feather';

const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat mengklik kontennya
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-white z-10">
          <X size={24} />
        </button>
        <div className="p-4 overflow-y-auto max-h-[90vh]">
          <img src={cert.imageUrl} alt={`Sertifikat ${cert.title}`} className="w-full h-auto rounded-lg" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;
