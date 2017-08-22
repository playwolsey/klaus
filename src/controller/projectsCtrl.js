import projectsDao from '../dao/projectsDao'

const createProject = async(ctx) => {
    let body = ctx.request.body
    let project = {}

    if (!body.projectname) {
        ctx.throw(400, 'params missing, projectname required')
    } else {
        project = await projectsDao.createProject(body.projectname)

        ctx.body = {
            'result': true,
            'data': project
        }
    }
}

const getAllProjects = async(ctx) => {
    let projects = []

    projects = await projectsDao.getAllProjects()

    ctx.body = {
        'result': true,
        'data': projects,
    }
}

const getApisByProjectId = async(ctx) => {
    let apis = []

    if (!ctx.params.id) {
        ctx.throw(400, 'params missing, id required')
    } else {
        apis = await projectsDao.getApisByProjectId(ctx.params.id)

        ctx.body = {
            'result': true,
            'data': apis,
        }
    }

}

export default {
    createProject,
    getAllProjects,
    getApisByProjectId
}
