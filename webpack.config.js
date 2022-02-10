// const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
    entry: {
        index: './src/js/index.js',
    },

    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "./dist")
    },

   // devtool: "source-map",

    devServer: {
        // host: '0.0.0.0',
        port: 8082
    },

    // Define loaders
    module: {
        rules: [
            // Use babel for JS files
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            }
        ],
    },

    // Define used plugins
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            chunks: ['index'],
            template: 'public/index.html'
        }),
    ],
};

module.exports = () => {

    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }

    return config;
};
