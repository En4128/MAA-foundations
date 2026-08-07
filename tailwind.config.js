/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        resort: {
          green: '#1E5631',       // Primary Forest Green
          'green-dark': '#133a20',
          'green-light': '#2a7243',
          gold: '#C9A227',        // Secondary Luxury Gold
          'gold-light': '#e5be44',
          'gold-dark': '#a38119',
          bg: '#F8F8F8',          // Background Warm Grey/White
          text: '#2B2B2B',        // Text Charcoal
          cream: '#FAF6F0',       // Warm Cream Accent
          slate: '#141E17'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'serif']
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'luxury-hover': '0 30px 60px -12px rgba(30, 86, 49, 0.18)',
        'gold-glow': '0 10px 30px -5px rgba(201, 162, 39, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.85))',
        'gold-gradient': 'linear-gradient(135deg, #C9A227 0%, #E6BE44 50%, #A38119 100%)',
        'green-gradient': 'linear-gradient(135deg, #1E5631 0%, #133a20 100%)',
      }
    },
  },
  plugins: [],
}
