import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f7',
          100: '#d4dbe9',
          200: '#a9b7d3',
          300: '#7e93bd',
          400: '#536fa7',
          500: '#334a7d',
          600: '#293c64',
          700: '#1f2d4b',
          800: '#141e33',
          900: '#0a0f1a',
          950: '#060a12',
        },
        accent: {
          DEFAULT: '#0e9f6e',
          light: '#34d399',
          dark: '#0b7a55',
        },
      },
      fontFamily: {
        nanum: ['"Nanum Gothic"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
