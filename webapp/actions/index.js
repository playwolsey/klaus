import 'whatwg-fetch'
import * as types from '../constants/ActionTypes'

export const getAllProjects = () => {
    return dispatch => {
        fetch('/projects', {
            credentials: 'same-origin'
        })
        .then(response => {
            return response.json()
        })
        .then(json => {
            dispatch({
                type: types.GET_ALL_PROJECTS,
                projects: json.data
            })
        })
    }
} 

export const getApisByProjectId = (projectId) => {
    return dispatch => {
        //fetch('/projects/' + projectId, {
        fetch('/projects/11', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json()
        })
        .then(json => {
            dispatch({
                type: types.GET_APIS_BY_PROJECTID,
                apis: json.data
            })
        })
    }
}
