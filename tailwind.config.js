/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF9F0',
        'blue': {
          100: '#E6EEFF',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        'amber': {
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        'brown': {
          100: '#F5F0E6',
          200: '#E7DBC8',
          300: '#D9C6AA',
          400: '#CAB28C',
          500: '#BB9D6E',
          600: '#A38758',
          700: '#8A7142',
          800: '#715C2C',
          900: '#594616',
        },
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};