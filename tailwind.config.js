/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#11102f',
        'navy-hover': '#1a1948',
        accent: '#2DD4A0',
        'accent-dim': '#e6faf4',
        primary: '#5B6AF0',
        'primary-dim': '#eef0ff',
        page: '#ffffff',
        dark: '#252525',
        muted: '#9f9f9f',
        silver: '#c0c0c0',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-md': '0 4px 16px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.08)',
        dropdown: '0 8px 32px rgba(0,0,0,0.14)',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
};
