const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry:{
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',//不要用于生产环境
  output: {
    // filename: 'bundle.js',
    filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    //先清理dist文件夹
    new CleanWebpackPlugin(['dist']),
    //自动生成加入引用的html文件
    new HtmlWebpackPlugin({
      filename:"index.html",
      favicon:"./fa.ico",
      title:"output management",
      template: 'index.html',
      chunks:['app','print']
    })

  ],
  module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },{
             test:/\.vue$/,
             loader:"vue-loader",
             exclude:/node_modules/
           }
         ]
       }
};