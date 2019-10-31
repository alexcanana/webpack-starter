module.exports = ({ env }) => {
  return {
    plugins: {
      'tailwindcss': './tailwind.config.js',
      'cssnano': env === 'development' ? false : { preset: 'default' },
      'autoprefixer': {}
    }
  }
}
