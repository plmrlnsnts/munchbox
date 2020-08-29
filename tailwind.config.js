module.exports = {
  purge: [],
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
