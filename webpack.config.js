const path = require('path');
const SRC_Dir = path.join(__dirname, '/src');
const DEST_Dir = path.join(__dirname, './public')

module.exports = {
  entry: `${SRC_Dir}/index.js`,
  output: {
    filename: `bundle.js`,
    path: DEST_Dir
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }

}