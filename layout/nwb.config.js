module.exports = {
  type: 'react-component',
  webpack: {
    aliases: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  npm: {
    esModules: true,
    umd: {
      global: 'LayoutComponent',
      externals: {
        react: 'React',
      },
    },
  },
};
