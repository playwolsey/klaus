import Koa from 'koa'
import views from 'koa-views'
import config from './config/config'
import routes from './routes'
import log4js from 'log4js'

const app = new Koa()
const LOG = log4js.getLogger('file')

app.use(views(`${__dirname}/./views`, {extension: 'swig'}))
app.use(routes())

app.listen(config.app.port)
LOG.info(`server started, listening on port ${config.app.port}`)

export default app
