module.exports = {
  // devtool: 'eval-source-map', // cheap-module-eval-source-map  eval-source-map
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  
  module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader"
              },
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: [
                  {
                      loader: "style-loader"
                  }, {
                      loader: "css-loader",
                      options: {
                        // modules: true
                    }
                }, {
                    loader: "postcss-loader"
                }
            
              ]
          }
        ]
      },

  devServer: {
    contentBase: "./public", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true // 实时刷新
  } 
}