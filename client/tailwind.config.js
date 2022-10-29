/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: "#40739e",
          secondary: "#487eb0",
      },
      fontFamily: {
          primary: ["sans-serif"],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
      },
  },
  },
  plugins: [],
}