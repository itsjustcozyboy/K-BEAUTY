/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a2847',
        mint: '#06d6a0',
        blue: '#0066cc',
        'light-blue': '#f0f5ff',
      },
    },
  },
  plugins: [],
}
