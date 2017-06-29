import 'whatwg-fetch'

export const getAllProjects = () => {
    return dispatch => {
        fetch('/projects/all', {
            "Content-Type": "application/json"
        })
        .then(response => {
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
