const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry:{
    app: './src/main.js',   
  },
  output: {
    filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
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
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
      $:"jquery",
      jQuery:"jquery",
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })  
  ],
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "common",
                chunks: "initial",
                minChunks: 2
            }
        }
    }
  },
  resolve: {
    alias: {  
      vue: 'vue/dist/vue.js' }
  },
  module: {
         rules: [
            {
              test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
              loader: 'url-loader'
            },
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },{
             test:/\.vue$/,
             use:["vue-loader"],
             exclude:/node_modules/
           },
           {
            test: /\.less$/,
            use: [
              'style-loader',
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'less-loader'
            ]
          }
         ]
       }
};