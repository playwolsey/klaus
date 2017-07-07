import * as types from '../constants/ActionTypes'

const initialState = {
    projects: []
}

const index = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ALL_PROJECTS: {
            return Object.assign({}, state, {
                projects: action.projects
            })
        }

        default: 
            return state
    }
}

export default index
