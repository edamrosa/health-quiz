/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      tightest: '-.015em',
      tighter: '-.025em',
      tight: '-.030em',
      normal: '0',
      wide: '.015em',
      wider: '.025em',
      widest: '.0.05em',
      widest: '.15em',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-ttnorms)']
      }       
    },
  },
  plugins: [],
}
