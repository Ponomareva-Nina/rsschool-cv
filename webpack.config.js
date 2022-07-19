const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname,"src"),
    mode: "development",
    entry: {
        main: "./index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        alias: {
            "@fonts": path.resolve(__dirname, "src/assets/fonts"),
            "@img": path.resolve(__dirname, "src/assets/img")
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    //loaders: 
    module: {
        rules: [
            {test: /\.css$/, 
            use: ['style-loader', 'css-loader']},

            {test: /\.(jpg|jpeg|png|svg|gif)$/,  
            type: "asset/resource"},

            {test: /\.(ttf|woff|woff2|eot)$/, 
            type: "asset/resource"}
        ]
    }
}
