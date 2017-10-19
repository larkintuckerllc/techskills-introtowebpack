const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  plugins: [
    new UglifyJSPlugin({sourceMap: true}),
  ],
};
