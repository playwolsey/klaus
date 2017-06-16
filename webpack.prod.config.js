var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'webapp'); //__dirname 中的src目录，以此类推

module.exports = {
    entry: {
        main: './webapp/index',
        vendor: [
            'react',
            'redux',
            'react-redux',
            'react-dom'
        ]
    },
    output: {
        publicPath: 'http://localhost:3000/assets/',
        path: path.join(__dirname, 'src/public/assets'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', 
            filename: 'vendor.bundle.js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].css')
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'autoprefixer-loader', 'sass-loader']
                }),
                include: [APP_PATH]
            },
            {
                test: /(\.jsx|\.js)$/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
                exclude: /node_modules/,
                include: [APP_PATH]
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]',
                include: [APP_PATH]
            }, 
            {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                include: [APP_PATH]
            } 
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'] //后缀名自动补全
    }
};
