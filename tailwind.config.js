/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        rotateIn: {
          '0%': { opacity: 0, transform: 'rotate(-180deg) scale(0.5)' },
          '100%': { opacity: 1, transform: 'rotate(0deg) scale(1)' },
        },
        slideInFromLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100%) scale(0.5)' },
          '100%': { opacity: 1, transform: 'translateX(0) scale(1)' },
        },
        slideInFromRight: {
          '0%': { opacity: 0, transform: 'translateX(100%) scale(0.5)' },
          '100%': { opacity: 1, transform: 'translateX(0) scale(1)' },
        },
        bounceIn: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        scaleAndFadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        rotateIn: 'rotateIn 0.3s ease-in-out 2s forwards',
        slideInFromLeft: 'slideInFromLeft 0.3s ease-in-out 4s forwards',
        slideInFromRight: 'slideInFromRight 0.3s ease-in-out 4s forwards',
        bounceIn: 'bounceIn 1s ease-in-out 3s forwards',
        scaleAndFadeIn: 'scaleAndFadeIn 0.8s ease-in-out 2s forwards',
      },
    },
  },
  plugins: [],
};
