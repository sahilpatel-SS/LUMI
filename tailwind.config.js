/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  '#0B1232',
        'navy-hover': '#131a3f',
        accent: '#2DD4A0',
        'accent-dim': '#e6faf4',
        primary: '#5B6AF0',
        'primary-dim': '#eef0ff',
        page: '#F5F6F8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.06)',
        'card-md': '0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)',
        dropdown: '0 8px 32px rgba(0,0,0,0.24)',
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}
