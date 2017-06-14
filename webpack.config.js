var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'webapp'); //__dirname 中的src目录，以此类推

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:3000',//资源服务器地址
            'webpack/hot/only-dev-server',
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
        path: path.resolve(__dirname, 'src/public/assets'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', 
            filename: 'vendor.bundle.js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
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
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'] //后缀名自动补全
    }
};
