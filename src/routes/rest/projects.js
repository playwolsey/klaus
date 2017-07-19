import Router from 'koa-router'
//import projects from '../../controller/projects'
import { getAllProjects, getApisByProjectId } from '../../controller/projects'

const router = new Router()

router
    //.get('/', projects.getAllProjects)
    //.get('/:id', projects.getApisByProjectId)
    .get('/', getAllProjects)
    .get('/:id', getApisByProjectId)

export default router
