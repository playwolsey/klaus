import projectsDao from '../dao/projectsDao'

const createProject = async(ctx) => {
    let project = {}

    console.log('ctx.body',ctx.body.projectname)
    project = await projectsDao.createProject(ctx.body.projectname)

    ctx.body = {
        'code': 200,
        'data': project,
        'msg': 'ok'
    }
}

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

    if (ctx.params.id) {
        apis = await Project.getApisByProjectId(ctx.params.id)
    }

    ctx.body = {
        'code': 200,
        'data': apis,
        'msg': 'ok'
    }
}

export default {
    createProject,
    getAllProjects,
    getApisByProjectId
}
