import colors from './src/design/variables/tailwindExtendColors.g'
import fontSize from './src/design/variables/fontSize'

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
      colors,
      fontSize
    }
  },
  plugins: [],
  corePlugins: { preflight: false }
}
