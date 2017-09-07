import Koa from 'koa'
import views from 'koa-views'
import log4js from 'log4js'
import base from './app.base'
import config from './config/config'
import routes from './routes'

const app = new Koa()
const LOG = log4js.getLogger('file')

base(app)

app.use(routes())

app.listen(config.app.port)
LOG.info(`server started, listening on port ${config.app.port}`)

export default app
