// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Ambil informasi lokasi (URL) saat ini
  const { pathname } = useLocation();

  // Gunakan useEffect untuk menjalankan kode setiap kali 'pathname' berubah
  useEffect(() => {
    // Lakukan scroll ke bagian paling atas halaman (koordinat 0, 0)
    // 'behavior: "smooth"' adalah kunci untuk membuat animasi scroll yang halus
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]); // <-- Dependensi array, efek ini akan berjalan lagi jika pathname berubah

  // Komponen ini tidak merender apa-apa, tugasnya hanya menjalankan efek di atas
  return null;
}

export default ScrollToTop;