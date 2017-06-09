import Koa from 'koa'
import config from './config/config'
import log4js from 'log4js'

const app = new Koa()
const LOG = log4js.getLogger('file')

// response
app.use(async (ctx) => {
    ctx.body = 'Hello World'
})

app.listen(config.app.port)
LOG.info(`server started, listening on port ${config.app.port}`)

export default app
