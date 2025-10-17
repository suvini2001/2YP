/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#1E40AF',
    },
    gridTemplateColumns: {
      'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
  }
},
  },
  plugins: [],
}