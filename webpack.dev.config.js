var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'webapp');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client?path=/__weback_hmr&timeout=20000',
            './webapp/index'
        ]
    },
    output: {
        publicPath: '/assets',
        path: path.resolve(__dirname, 'public/assets'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')}),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('[name].css'),
        new ProgressBarPlugin(),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'public/assets/vendor.manifest.json')
        })
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    'presets': ['es2015', 'react', 'stage-0'],
                    'env': {
                        'development': {
                            'presets': ['react-hmre']
                        }
                    }
                }
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
        extensions: ['.js', '.jsx', '.scss', '.css']
    }
};
