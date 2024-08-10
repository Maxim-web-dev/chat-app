/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,js,jsx}',
    '/frontend/src/**/*.{ts,tsx,js,jsx}',
    '/frontend/src/pages/login.tsx'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
