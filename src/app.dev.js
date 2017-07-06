import Koa from 'koa'
import views from 'koa-views'
import base from './config/base'
import config from './config/config'
import routes from './routes'
import log4js from 'log4js'

import webpack from 'webpack'
//import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import koaWebpack from 'koa-webpack'
import webpackConfig from '../webpack.dev.config'

const app = new Koa()
const LOG = log4js.getLogger('file')
const compiler = webpack(webpackConfig)

base(app)

//app.use(devMiddleware(compiler, {
//    noInfo: true,
//    publicPath: webpackConfig.output.publicPath,
//    headers: { "X-Custom-Header": "yes" },
//    stats: {
//        colors: true
//    }
//}))
//
//app.use(hotMiddleware(compiler, {
//    //heartbeat: 10 * 1000,
//    //log: console.log,
//    //path: '/__webpack_hmr'
//}))

app.use(koaWebpack({
    compiler: compiler,
    dev: {
        publicPath: webpackConfig.output.publicPath,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
        stats: { colors: true },
        quiet: false,
        noInfo: true
    },
    hot: {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
    }
}))

app.use(routes())

app.listen(config.app.port)
LOG.info(`dev server started, listening on port ${config.app.port}`)

export default app
