module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
    './resources/js/**/*.js',
  ],
  theme: {
    extend: {
      borderRadius: {
        xl: '1rem',
      },
      fontFamily: {
        display: 'Chewy, cursive',
      },
      inset: {
        4: '16px',
      }
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    pointerEvents: ['responsive', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
