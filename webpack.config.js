const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Start-up
//npm init -y

//Install Node Modules
//npm install webpack webpack-cli --save-dev

//lodash (unsure why yet)
//npm install --save lodash

//webpack dev server (host in browser and auto reloads changes)
//npm install --save-dev webpack-dev-server
module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',

  },
  //Helps the browser track errors and give better feedback
  devtool: "inline-source-map",
  //With devServer installed you can live reload in the browser
  //Needs: npm install --save-dev webpack-dev-server
  //Needs: changes to .json "scripts"
  devServer: {
    static: "./dist",
  },
  //Needs: npm install --save-dev html-webpack-plugin
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weird Web Portfolio',
    }),
  ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      //cleans dist folder leaving only the latest build
      clean: true,
  },
  module: {
    rules: [
      //needs: npm install --save-dev style-loader css-loader
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      //Just import them when needed
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      //Use the @font-face declaration in CSS
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  //For avoiding Code Splitting troubles
  optimization: {
    runtimeChunk: "single",
  },
};