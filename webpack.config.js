const path = require('path');

module.exports = {
  entry: './src/guille-navbar.tsx',
  output: {
    filename: 'guille-navbar.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'system',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // Optional: speeds up compilation, but disables type checking
          }
        },
      },
    ],
  },
  mode: 'production',
  externals: ['react', 'react-dom', 'single-spa', 'single-spa-react'],
};
