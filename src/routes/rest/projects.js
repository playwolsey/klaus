import Router from 'koa-router'

const router = new Router()

router.get('/', async (ctx, next) => {
    console.log(ctx.url)
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

router.get('/:id', async (ctx, next) => {
    //console.log('params',ctx.params.id)
    ctx.body = {
        'code': 200,
        'data': [{
            'id': 11,
            'name': 'a1'
        }, {
            'id': 22,
            'name': 'a2'
        }],
        'msg': 'ok'
    }
})

export default router
