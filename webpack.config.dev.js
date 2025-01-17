const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    resolve : {
        extensions : ['.js', '.jsx']
    },
    mode: 'development',
    module : {
        rules : [
            {
                test: /\.js$|jsx/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new CssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer : {
        static : {
            directory: path.join(__dirname, 'dist/')
        },
        compress : true,
        port : 3000,
        open: true,
    }
}