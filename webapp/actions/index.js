import 'whatwg-fetch'
import * as types from '../constants/ActionTypes'

export const getAllProjects = () => {
    return dispatch => {
        fetch('/projects', {
            credentials: 'same-origin'
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({
                type: types.GET_ALL_PROJECTS,
                projects: json.data
            })
        })
    }
} 

export const createProject = (pname) => {
    return dispatch => {
        let params = new FormData()
        params.append('projectname', pname)
        //data.append('user', 'hubot')

        fetch('/projects', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            //body: 'projectname=' + pname
            body: params
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({
                type: types.CREATE_PROJECT,
                project: json.data
            })
        })
    }
}

export const getApisByProjectId = (projectId) => {
    return dispatch => {
        fetch('/projects/' + projectId, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({
                type: types.GET_APIS_BY_PROJECTID,
                apis: json.data
            })
        })
    }
}

export const getDetailByApiId = (apiId) => {
    return dispatch => {
        fetch('/apis/' + apiId, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({
                type: types.GET_DETAIL_BY_APIID,
                detail: json.data
            })
        })
    }
}
