const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// commonJs
// __dirname = D:\Mis documentos\Repositorios\react\webpack-react/dist

module.exports = {
    mode: "development",
    // mode: "production",
    entry : "./src/app.js",
    output:{
        path: path.join(__dirname,"dist"),// ruta absoluta
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js",".jsx"]
    },
    module:{
        rules: [ 
            { 
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test :/\.(css)$/,
                use : ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "main.html",
            minify: false,
        }),
    ]
}