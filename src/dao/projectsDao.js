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
export const getApisByProjectId = async(id) => {
    if (!id) {
        return []
    } else {
        await Project.findById(id);
    }
}

const projectsDao = {
    getAllProjects: getAllProjects
} 

export default projectsDao
