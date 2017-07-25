import * as types from '../constants/ActionTypes'

const initialState = {
    projects: [],
    apis: [],
    detail: {},
    project: {}
}

const index = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ALL_PROJECTS: {
            return Object.assign({}, state, {
                projects: action.projects
            })
        }

        case types.CREATE_PROJECT: {
            return Object.assign({}, state, {
                project: action.project
            })
        }
        
        case types.GET_APIS_BY_PROJECTID: {
            return Object.assign({}, state, {
                apis: action.apis
            })
        }

        case types.GET_DETAIL_BY_APIID: {
            return Object.assign({}, state, {
                detail: action.detail
            })
        }

        default: 
            return state
    }
}

export default index
