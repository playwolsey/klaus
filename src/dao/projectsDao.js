import db from '../models/index'

/**
 * @desc 创建新项目
 * @returns {project}
 */
const createProject = async(pname) => {
    return await db.project.create({
        name: pname
    })
}

/**
 * @desc 查询项目列表
 * @returns {*}
 */
const getAllProjects = async() => {
    return await db.project.findAll()
}

/**
 * @desc 通过项目id查询接口列表
 * @param id
 * @returns {*}
 */
const getApisByProjectId = async(id) => {
    return await db.project.findById(id);
}


export default {
    createProject,
    getAllProjects,
    getApisByProjectId
}
