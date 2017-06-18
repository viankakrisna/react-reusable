module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Link',
      externals: {
        react: 'React'
      }
    }
  }
}
