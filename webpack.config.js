var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'webapp');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: [
            //'webpack-dev-server/client?http://localhost:3000',//资源服务器地址
            //'webpack/hot/only-dev-server',
            'webpack-hot-middleware/client?path=http://localhost:3000/__weback_hmr&timeout=20000',
            './webapp/index'
        ],
        vendor: [
            'react',
            'redux',
            'react-redux',
            'react-dom'
        ]
    },
    output: {
        publicPath: 'http://0.0.0.0:3000/assets',
        path: path.resolve(__dirname, 'public/assets'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', 
            filename: 'vendor.bundle.js'
        }),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')}),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css')
    ],
    //devServer: {
    //    hot: true,
    //    inline: true,
    //    contentBase: './public'
    //},
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

//if (process.env.NODE_ENV === 'development') {
//    module.exports.devtool = 'cheap-module-eval-source-map'
//    module.exports.entry.main = [
//        'webpack-dev-server/client?http://localhost:3000',//资源服务器地址
//        'webpack/hot/only-dev-server',
//        './webapp/index'
//    ]
//    module.exports.plugins = (module.exports.plugins || []).concat([
//        new webpack.DefinePlugin({
//            'process.env': {
//                NODE_ENV: JSON.stringify("development")
//            }
//        }),
//        new webpack.HotModuleReplacementPlugin()
//    ])
//} else if (process.env.NODE_ENV === 'production') {
//    //module.exports.devtool = 'cheap-module-source-map'
//    module.exports.entry.main = [
//        './webapp/index'
//    ]
//    module.exports.plugins = (module.exports.plugins || []).concat([
//        new webpack.DefinePlugin({
//            'process.env': {
//                NODE_ENV: JSON.stringify("production")
//            }
//        }),
//        new webpack.optimize.UglifyJsPlugin({
//            compress: {
//                //supresses warnings, usually from module minification
//                warnings: false
//            }
//        })
//    ])
//}
