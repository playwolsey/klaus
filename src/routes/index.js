import Router from 'koa-router'
import compose from 'koa-compose'

const router = new Router()

router.get('/', async(ctx, next) => {
    await ctx.render('./index')
})

//router.get('*', async (ctx, next) => {
//    ctx.body = { status : 404 }
//})

export default routes => (
    compose([
        router.routes(),
        router.allowedMethods()
    ])
) 
