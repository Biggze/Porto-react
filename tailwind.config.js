/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // PERBAIKAN: Gabungkan kedua animasi ke dalam satu objek 'animation'
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
      keyframes: {
        "fade-in-up": {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Tambahkan keyframes untuk infinite-scroll di sini juga
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
