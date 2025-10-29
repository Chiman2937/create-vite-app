import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.svg', './styles//*.{css,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        'primary-orange': {
          100: '#fffcf2',
          200: '#ffe59e',
        },
      },
      fontSize: {
        //Header
        h1: ['32px', { lineHeight: '39px', fontWeight: 'normal' }],
        'h1-bold': ['32px', { lineHeight: '39px', fontWeight: 'bold' }],
        'h1-medium': ['32px', { lineHeight: '39px', fontWeight: '500' }],
        'h1-light': ['32px', { lineHeight: '39px', fontWeight: '300' }],
      },
      borderRadius: {
        x1: '8px',
        x2: '12px',
      },
    },
  },
  plugins: [],
};

export default config;
