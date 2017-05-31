var path = require("path");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    //historyApiFallback: true
  },
  entry: [
    path.join(__dirname, '/src/index.js')
  ],
  //entry: './src/app.js',
  output: {
      path: path.join(__dirname, '/public/dist'),
      publicPath: "/bin/",
      filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
}
