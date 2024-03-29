module.exports = {
  darkMode: false,
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './commons/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          50: '#FFFFFF',
          100: '#F9F7FF',
          200: '#DED0FC',
          300: '#C2A9FA',
          400: '#A783F8',
          500: '#8B5CF6',
          600: '#6527F3',
          700: '#4A0CD6',
          800: '#3709A1',
          900: '#25066C',
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
};
