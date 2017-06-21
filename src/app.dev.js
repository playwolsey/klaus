import Koa from 'koa'
import views from 'koa-views'
import convert from 'koa-convert'
import base from './config/base'
import config from './config/config'
import routes from './routes'
import log4js from 'log4js'

import webpack from 'webpack'
import webpackDevMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'koa-webpack-hot-middleware'
import webpackConfig from '../webpack.config'

const app = new Koa()
const LOG = log4js.getLogger('file')
const compiler = webpack(webpackConfig)

base(app)
app.use(routes())

app.use(convert(webpackDevMiddleware(compiler, {
    noInfo: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: false
    },
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        inline: true
    }
})))
app.use(convert(webpackHotMiddleware(compiler, {
    heartbeat: 10 * 1000
})))

app.listen(config.app.port)
LOG.info(`dev server started, listening on port ${config.app.port}`)

export default app
