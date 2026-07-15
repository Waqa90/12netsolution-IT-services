/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
          extend: {
                  colors: {
                            brand: {
                                        50: '#f5f2ed',
                                        100: '#e8e0d3',
                                        200: '#d2c0a3',
                                        300: '#b89f76',
                                        400: '#8f7350',
                                        500: '#6b5439',
                                        600: '#4a3826',
                                        700: '#3a2b1d',
                                        800: '#2c2015',
                                        900: '#1e1610',
                            },
                  },
          },
    },
    plugins: [],
};
