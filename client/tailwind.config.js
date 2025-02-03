/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          570: '#2C6BBF', 
        },
        gray: {
          450: '#909090',
          350: '#c4c4c4',
          380: '#a6a6a6',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}