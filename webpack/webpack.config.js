const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    main: './src/app.tsx'
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].bundle.js',
  },
  watch: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist/'),
    port: 2222
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /.tsx?$/, use: ['awesome-typescript-loader'] },
      { test: /.html$/, use: 'raw-loader' },
      { test: /\.json$/, use: 'json-loader' },
      { test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader'] },
      { test: /\.woff(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?.+)?$/, use: 'file-loader' },
      { test: /\.eot(\?.+)?$/, use: 'file-loader' },
      { test: /\.svg(\?.+)?$/, use: 'file-loader' },
      { test: /\.png$/, use: 'url-loader?mimetype=image/png' },
      { test: /\.gif$/, use: 'url-loader?mimetype=image/gif' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      showErrors: true,
      title: 'React-TS-Webpack App',
      path: path.join(__dirname, '../dist/'),
      hash: true
    })
  ]

}
