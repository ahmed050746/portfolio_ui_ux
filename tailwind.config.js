/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff3ed',
          100: '#ffe0d0',
          200: '#ffc1a3',
          300: '#ff9b70',
          400: '#ff7a4a',
          500: '#ff5c2e',
          600: '#ed4420',
          700: '#c43318',
          800: '#9c2a17',
          900: '#7d2618',
          950: '#431008',
        },
        ink: {
          50: '#f3f3f5',
          100: '#e3e3e8',
          200: '#c8c8d2',
          300: '#a4a4b3',
          400: '#7c7c90',
          500: '#5c5c70',
          600: '#45455a',
          700: '#343448',
          800: '#1f1f2e',
          900: '#14141f',
          950: '#0a0a12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(19, 23, 60, 0.08), 0 4px 16px -4px rgba(19, 23, 60, 0.06)',
        card: '0 4px 24px -8px rgba(19, 23, 60, 0.10), 0 8px 40px -12px rgba(19, 23, 60, 0.08)',
        float: '0 12px 48px -12px rgba(19, 23, 60, 0.18), 0 4px 16px -6px rgba(19, 23, 60, 0.10)',
        glow: '0 0 0 1px rgba(255, 92, 46, 0.15), 0 8px 32px -8px rgba(255, 92, 46, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-1deg)' },
        },
        'float-delay': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(1deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.6' },
          '70%': { transform: 'scale(1.1)', opacity: '0' },
          '100%': { transform: 'scale(1.1)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-delay': 'float-delay 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
