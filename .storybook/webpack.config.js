const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.svg$/,
        loaders: "svg-url-loader"
        //loaders: ["svg-url-loader", "svg-inline-loader"]
        // defining inline loaders breaks importing svg in a css file
      }
    ]
  }
};
