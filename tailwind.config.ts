import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        colors: {
          text: '#dee6f8',
          background: '#040810',
          primary: '#6d9bfd',
          secondary: '#831843',
          accent: '#3c83f6',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dracula', 'night', 'fantasy', 'forest'],
  },
};
export default config;
