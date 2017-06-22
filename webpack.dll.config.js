var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'react',
            'redux',
            'react-redux',
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, 'public/assets/[name].manifest.json'),
            name: '[name]_library',
        })
    ]
};
