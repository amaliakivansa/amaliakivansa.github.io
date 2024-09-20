import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        magenta: '#C64B81',
        gray: '#E5E5E5',
        'dark-gray': '#7F7F7F',
        'light-cream': '#FBF6E2',
        'white-gray': '#FCFCFC',
      },
    },
  },
  plugins: [],
};
export default config;
