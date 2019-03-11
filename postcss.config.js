module.exports = ({ env }) => {
  return {
    plugins: {
      'tailwindcss': './tailwind.js',
      'cssnano': env === 'development' ? false : { preset: 'default' },
      'autoprefixer': {}
    }
  }
}
