import serve from 'koa-static'
import logger from 'koa-logger'
import mount from 'koa-mount'
import views from 'koa-views'
import convert from 'koa-convert'
import koaBody from 'koa-body'
import historyApiFallback from 'koa-connect-history-api-fallback'
import log4js from 'log4js'
import session from 'koa-session'
import passport from 'koa-passport'
import sessionConfig from './config/sess.config'

export default (app) => {
    app.proxy = true

    app.use(logger())
    app.use(koaBody())
    app.use(mount("/", serve(`${__dirname}/../public/`)))
    app.use(views(`${__dirname}/views`, {extension: 'swig'}))

    app.use(session(sessionConfig, app))

    app.use(passport.initialize())
    app.use(passport.session())

    //app.use(convert(historyApiFallback({
    //    index: '/'
    //})))
}
