import serve from 'koa-static'
import logger from 'koa-logger'
import mount from 'koa-mount'
import views from 'koa-views'
import convert from 'koa-convert'
import historyApiFallback from 'koa-connect-history-api-fallback'
import log4js from 'log4js'

export default (app) => {
    app.proxy = true

    app.use(logger())
    app.use(mount("/", serve(`${__dirname}/../../public/`)))
    app.use(views(`${__dirname}/../views`, {extension: 'swig'}))

    //app.use(convert(historyApiFallback({
    //    index: '/'
    //})))
}
