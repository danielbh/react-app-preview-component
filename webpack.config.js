module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    libraryTarget: 'umd',
    filename: './dist/index.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: '/(node_modules|bower_components|stories|storybook)/',
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
}
