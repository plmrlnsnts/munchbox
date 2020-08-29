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
      boxShadow: {
        'outline-indigo': '0 0 0 3px rgba(180, 198, 252, .45)',
      },
      fontFamily: {
        display: 'Chewy, cursive',
      },
      inset: {
        4: '16px',
      },
      minWidth: {
        '1/4': '25%',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'focus-within'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    pointerEvents: ['responsive', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
