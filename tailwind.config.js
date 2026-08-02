/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e6ede6',
          200: '#cddccd',
          300: '#a8c2a8',
          400: '#7da17d',
          500: '#5a8060',
          600: '#2d6a4f',
          700: '#245a40',
          800: '#1e4a34',
          900: '#193d2c',
          950: '#0d2218',
        },
        cream: {
          50: '#fdfaf5',
          100: '#faf4e8',
          200: '#f4e8d0',
          300: '#ead5b0',
          400: '#dcba85',
          500: '#cfa060',
        },
        gold: {
          300: '#e8c878',
          400: '#d4a843',
          500: '#b8860b',
          600: '#9a6f0a',
        },
        terracotta: {
          300: '#e8a890',
          400: '#d4795a',
          500: '#b85c3c',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'texture-linen': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card': '0 2px 16px 0 rgba(45,106,79,0.08)',
        'card-hover': '0 8px 32px 0 rgba(45,106,79,0.14)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
