import Project from '../models/Project'

/**
 * @desc 查询项目列表
 * @returns {*}
 */
const getAllProjects = async() => {
    return await Project.findAll()
}

/**
 * @desc 通过项目id查询接口列表
 * @param id
 * @returns {*}
 */
const getApisByProjectId = async(id) => {
    if (!id) {
        return []
    } else {
        return await Project.findById(id);
    }
}


export default {
    getAllProjects,
    getApisByProjectId
}
