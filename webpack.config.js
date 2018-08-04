const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                   loader: 'babel-loader'
                }
            },
            {
               test: /\.s?css$/,
                   use: [
                       "style-loader", // creates style nodes from JS strings
                       "css-loader", // translates CSS into CommonJS
                       "sass-loader" // compiles Sass to CSS
                   ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],

}