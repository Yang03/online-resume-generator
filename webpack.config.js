const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//const srcDir = __dirname + "../src";
const distDir = __dirname + "/dist";

module.exports = {
    entry: './src/app.js',
    output: {
        path: distDir,
        filename: 'index.[hash:7].js'
    },
    devtool: 'source-map',
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // we do not want anything from node_modules to be compiled
                // exclude: /node_modules/,
                use: [{loader: 'babel-loader', options: {
                  "plugins": [
                    ['import', {
                      libraryName: 'zarm',
                      style: true, // or 'css'
                    }],
                  ]
                }}]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {
                        loader: 'postcss-loader',
                        // options: {
                        //     plugins: [
                        //         require('postcss-flexbugs-fixes'),
                        //         require('postcss-preset-env')({
                        //             autoprefixer: {
                        //                 flexbox: 'no-2009',
                        //             },
                        //             stage: 3,
                        //         }),
                        //     ],
                        // },
                    },
                    {loader: "sass-loader"},
                ]


            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
                use: 'url-loader?limit=8129',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './view/index.html',
        }),
        // new webpack.HotModuleReplacementPlugin(),//热加载插件
        new ExtractTextPlugin({
            filename: "style.scss"
        })
    ]
}
