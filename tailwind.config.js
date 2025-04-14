/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primaryLight: '#f9a8d4',
          primaryDark: '#ffffff',
          secondaryLight: '#c084fc',
          secondaryDark: '#000000',
  
          backgroundLight: '#ffffff',
          backgroundDark: '#121212',
  
          textLight: '#000000',
          textDark: '#ffffff',
  
          buttonLightFrom: '#f0ecfc',
          buttonLightTo: '#c797eb',
          buttonLightText: '#353535',
          buttonLightHover: '#c797eb',
  
          buttonDarkFrom: '#4a4a4a',
          buttonDarkTo: '#2d2d2d',
          buttonDarkText: '#e5e5e5',
          buttonDarkHover: '#a0a0a0',
        },
        animation: {
          fadeInUp: 'fadeInUp 1s forwards',
        },
        keyframes: {
          fadeInUp: {
            '0%': {
              opacity: '0',
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
      },
    },
    plugins: [],
  };
  