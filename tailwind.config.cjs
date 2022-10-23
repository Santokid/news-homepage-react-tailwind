/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
      'orange-col': '#f15e50',
      'blue-dark': 'hsl(240, 100%, 5%)',// Configure your color palette here
    },},
  },
  
  plugins: [],
};
