import projectsDao from '../dao/projectsDao'

console.log('fdasf',projectsDao)
export const getAllProjects = async(ctx) => {
    let projects = []

    projects = await projectsDao.getAllProjects()

    ctx.body = {
        'code': 200,
        'data': projects,
        'msg': 'ok'
    }
}

export const getApisByProjectId = async(ctx) => {
    let apis = []

    apis = await Project.getApisByProjectId(ctx.params.id)

    ctx.body = {
        'code': 200,
        'data': apis,
        'msg': 'ok'
    }
}
