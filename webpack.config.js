const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0','react']
                }
            }
        ]
    },

    plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                template: require('html-webpack-template'),
                title: 'SALT Status',
                appMountId: 'react-content'
                                  })
    ]
};


