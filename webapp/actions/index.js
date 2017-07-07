import 'whatwg-fetch'
import * as types from '../constants/ActionTypes'

export const getAllProjects = () => {
    return dispatch => {
        fetch('/projects/all', {
            credentials: 'same-origin'
        })
        .then(response => {
            return response.json()
        })
        .then(tjson => {
            dispatch({
                type: types.GET_ALL_PROJECTS,
                projects: tjson.data
            })
        })
    }
} 
