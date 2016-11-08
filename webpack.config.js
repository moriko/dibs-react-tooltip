'use strict';

var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './Tooltip.jsx',
    output: {
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, './dist'),
        filename: 'Tooltip.js'
    },
    externals: {
        'react': 'react',
        'lodash.debounce': 'lodash.debounce'
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'babel-loader', query: {plugins: ['transform-object-assign']}},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css?localIdentName=[name]__[local]___[hash:base64:5]!postcss')}
        ]
    },
    postcss: [
        autoprefixer({autoprefixer: undefined})
    ],
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};
