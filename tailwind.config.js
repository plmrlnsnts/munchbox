const defaultTheme = require('tailwindcss/defaultTheme')

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
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        4: '16px',
      },
      minWidth: {
        '1/4': '25%',
      },
      padding: {
        '2/3': '66.6667%',
      },
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select': {
          backgroundColor: theme('colors.gray.200'),
          borderColor: theme('colors.gray.200'),
          borderRadius: theme('borderRadius.lg'),
          transitionProperty: theme('transitionProperty.all'),
          transitionDuration: theme('transitionDuration.150'),
          transitionTimingFunction: theme('transitionTimingFunction.linear'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
            borderColor: theme('colors.indigo.300'),
            boxShadow: theme('boxShadow.outline-indigo'),
          },
        }
      }
    }),
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'focus-within'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    visibility: ['responsive', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
