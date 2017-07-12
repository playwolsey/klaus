import Router from 'koa-router'

const router = new Router()

router.get('/:id', async (ctx, next) => {
    //console.log('params',ctx.params.id)
    ctx.body = {
        'code': 200,
        'data': {
            'id': 11,
            'name': 'a1',
            'method': 'POST'
        },
        'msg': 'ok'
    }
})

export default router
