import * as types from '../constants/ActionTypes'

const initialState = {
    projects: []
}

const index = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ALL_PROJECTS: {
            return Object.assign({}, state, {
                projects: action.data.projects
            })
        }

        default: 
            return state
    }
    return state
}

export default index
