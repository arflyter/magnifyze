import { Config } from 'tailwindcss';
import formsPlugin from '@tailwindcss/forms';
import headlessuiPlugin from '@headlessui/tailwindcss';

const tailwindConfig: Config = {
  darkMode: 'class', // Enable class-based dark mode
  
  content: ['./pages/**/*.{js,jsx,ts,tsx}', '@/components/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  
  theme: {
    extend: {
      colors: {
        light: '#f0f0f0',
        dark: '#333333',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin], // Retain existing plugins
};

export default tailwindConfig;
