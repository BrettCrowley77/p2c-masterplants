const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv')

module.exports = {
    // define entry file and output
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve('./web/res'),
        filename: '[name].js'
    },
    plugins: [
        // ...
        new webpack.DefinePlugin({
           'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
        })
        // ...
    ],
    // define babel loader
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    }
};