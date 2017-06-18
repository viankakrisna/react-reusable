module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'GridComponent',
      externals: {
        react: 'React'
      }
    }
  }
}
