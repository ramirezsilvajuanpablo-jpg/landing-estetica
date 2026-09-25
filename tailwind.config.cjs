// Mismo tema que estaba embebido en el HTML cuando Tailwind se compilaba en el
// navegador. Ahora el CSS se genera una sola vez con `npm run css`.
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brandBlue: '#1A4A76',
        brandBlueLight: '#2C6496',
        brandGreen: '#3A7843',
        brandGreenLight: '#4A9455',
        darkText: '#1F2937',
        lightBg: '#F8FAFC',
      },
    },
  },
};
