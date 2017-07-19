import Router from 'koa-router'
import projects from '../../controller/projects'

const router = new Router()

router
    .get('/', projects.getAllProjects)
    .get('/:id', projects.getApisByProjectId)

export default router
