const path = require('path')

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: __dirname,
    filename: "target/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src/client"),
          path.resolve(__dirname, "src/shared")
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          cacheDirectory: '',
          sourceMap: false
        }
      }
    ]
  }
}
