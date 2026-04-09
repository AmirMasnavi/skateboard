/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Asymmetric grid col-spans used dynamically in FeaturedProducts
    'md:col-span-2', 'md:col-span-3', 'md:col-span-4',
    'md:col-span-5', 'md:col-span-6', 'md:col-span-7',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
