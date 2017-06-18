module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'styled',
      externals: {
        react: 'React'
      }
    }
  }
}
