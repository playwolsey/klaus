import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getApisByProjectId } from '../actions/index'

import '../style/projects.scss'

class Projects extends Component {
    static propTypes = {
        projects: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired 
    }

    constructor(props) {
        super(props)
        
        this.chooseProject = this.chooseProject.bind(this)
    }

    chooseProject = (e) => {
        //console.log(e.target.id)
        this.props.dispatch(getApisByProjectId(e.target.id))
    }

    render() {
        return (
            <ul className='m-projects-list'>
            {
                this.props.projects.map((item, index) => {
                    return (
                        <li className='projects-li' key={index} onClick={this.chooseProject}>
                            <a className='projects-name' id={item.id} href='javascript:void(0)'>{item.name}</a>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
}

//Projects.propTypes = {
//    dispatch: PropTypes.func.isRequired
//}

const mapStateToProps = state => {
    return {
        apis: state.index.apis
    }
}

export default connect(mapStateToProps)(Projects)
