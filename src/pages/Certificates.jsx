import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Impor motion dan AnimatePresence
import CertificateModal from '../components/CertificateModal.jsx'; // Pastikan path ini benar
import portfolioData from '../data/Data.js'; // Pastikan path ini benar

// Varian animasi untuk container dan item
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Jeda antar item yang dianimasikan
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
    },
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm"
      >
        <motion.h1 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
            Sertifikat
        </motion.h1>
        <motion.p 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-600 dark:text-gray-400 mb-8"
        >
            Klik pada gambar untuk melihat detail.
        </motion.p>

        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible" 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {portfolioData.certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="overflow-hidden rounded-lg shadow-md mb-2">
                <motion.img 
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {cert.role}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;