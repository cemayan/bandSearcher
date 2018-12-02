const path = require('path');
module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "bundle.js"
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },   
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader" 
       },
      {
        test: /\.css$/,
        use: [
            {
                loader: "style-loader",
            },
            {
                loader: "css-loader",
            },
      
        ],
    }
    ]
  },
 
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
  },
}