module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: __dirname,
    filename: "target/app.js"
  },
  module: {
    loaders: [
      /*{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: ''
        }
      }*/
    ]
  }
}
