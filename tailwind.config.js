module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: '#root', // This ensures Tailwind styles override MUI
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4B83F2',
          main: '#2563eb',
          dark: '#1D4ED8',
        },
        secondary: {
          light: '#8B5CF6',
          main: '#7C3AED',
          dark: '#6D28D9',
        },
      }
    }
  },
  plugins: [],
}