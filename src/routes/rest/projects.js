import Router from 'koa-router'
import projectsCtrl from '../../controller/projectsCtrl'

const router = new Router()

router
    .get('/', projectsCtrl.getAllProjects)
    .get('/:id', projectsCtrl.getApisByProjectId)

export default router
