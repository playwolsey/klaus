var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'webapp'); //__dirname 中的src目录，以此类推
var BUILD_PATH = path.resolve(ROOT_PATH, 'public/dist'); //发布文件所存放的目录

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
        //publicPath: '/public/dist/', //编译好的文件，在服务器的路径,这是静态资源引用路径
        //path: BUILD_PATH, //编译到当前目录
        //filename: '[name].js', //编译后的文件名字
        //chunkFilename: '[name].[chunkhash:5].min.js'
        path: path.join(__dirname, 'src/public/assets'),
        filename: '[name].js',
        publicPath: 'http://localhost:3000/static/'
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
        })
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
