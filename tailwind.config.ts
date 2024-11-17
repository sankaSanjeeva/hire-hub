import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: '#309689',
      },
      borderRadius: {
        '3xl': '20px',
      },
      boxShadow: {
        card: '0 4px 8px 0 #30968914', // theme * 0.08
      },
    },
  },
  plugins: [animate],
};
export default config;
