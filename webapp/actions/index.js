//export GET_ALL_PROJECTS = 'GET_ALL_PROJECTS'
import 'whatwg-fetch'

export const getAllProjects = () => {
    return dispatch => {
        fetch('/projects/all', {
            "Content-Type": "application/json"
        })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(tjson => {
            dispatch({
                type: 'GET_ALL_PROJECTS',
                data: tjson.data
            })
        })
    }
} 
