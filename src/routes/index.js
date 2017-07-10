import Router from 'koa-router'
import compose from 'koa-compose'

import projectsRouter from './rest/projects'
import apisRouter from './rest/apis'

const router = new Router()

router.get('/', async(ctx, next) => {
    await ctx.render('./index')
})

router.use('/projects',  projectsRouter.routes(), projectsRouter.allowedMethods())
router.use('/apis',  apisRouter.routes(), apisRouter.allowedMethods())

router.get('*', async (ctx, next) => {
    ctx.body = { status : 404 }
})

export default routes => (
    compose([
        router.routes(),
        router.allowedMethods()
    ])
) 
