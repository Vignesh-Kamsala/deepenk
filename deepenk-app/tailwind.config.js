/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1F2937',
        'gray-light': '#D9D9D9',
        'dark-gray': '#1C1818',
        'medium-gray': '#767676',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.2', letterSpacing: '0' }],
        'button': ['18px', { lineHeight: '1.2', letterSpacing: '0' }],
      },
      borderRadius: {
        '25': '25px',
      },
    },
  },
  plugins: [],
}
