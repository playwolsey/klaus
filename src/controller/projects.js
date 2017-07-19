import projectsDao from '../dao/projectsDao'

const getAllProjects = async(ctx) => {
    let projects = []

    projects = await projectsDao.getAllProjects()

    ctx.body = {
        'code': 200,
        'data': projects,
        'msg': 'ok'
    }
}

const getApisByProjectId = async(ctx) => {
    let apis = []

    apis = await Project.getApisByProjectId(ctx.params.id)

    ctx.body = {
        'code': 200,
        'data': apis,
        'msg': 'ok'
    }
}

export default {
    getAllProjects,
    getApisByProjectId
}
