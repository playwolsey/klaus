import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getApisByProjectId, createProject } from '../actions/index'

import '../style/projects.scss'

class Projects extends Component {
    static propTypes = {
        projects: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired 
    }

    constructor(props) {
        super(props)
        
        this.chooseProject = this.chooseProject.bind(this)
        this.createProject = this.createProject.bind(this)
    }

    chooseProject = (e) => {
        this.props.dispatch(getApisByProjectId(e.target.id))
    }

    createProject = () => {
        this.props.dispatch(createProject('new'))
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
                <li className='projects-li' onClick={this.createProject}>
                    <a className='projects-name projects-name-new' href='javascript:void(0)'>创建项目</a>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        apis: state.index.apis
    }
}

export default connect(mapStateToProps)(Projects)
