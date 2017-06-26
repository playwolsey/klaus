import Router from 'koa-router'

const router = new Router()

router.get('/all', async (ctx, next) => {
    ctx.accepts('application/json')
    ctx.body = {
        'code': 200,
        'data': [{
            'id': 1,
            'name': 'pro1'
        }, {
            'id': 2,
            'name': 'pro2'
        }],
        'msg': 'ok'
    }
})

export default router
