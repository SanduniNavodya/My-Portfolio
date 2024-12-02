/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // If you're using the App Directory
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // For Pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Your components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
