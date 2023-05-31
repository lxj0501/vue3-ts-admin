import * as design from './src/design/settings'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  screens: {
    md: '760px',
    lg: '1024px'
  },
  theme: {
    extend: {
      ...design
    }
  },
  plugins: []
}
