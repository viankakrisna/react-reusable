module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FormComponent',
      externals: {
        react: 'React'
      }
    }
  }
}
