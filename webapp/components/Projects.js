import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getApisByProjectId } from '../actions/index'

import '../style/projects.scss'

class Projects extends Component {
    static propTypes = {
        projects: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props)
        
        this.chooseProject = this.chooseProject.bind(this)
    }

    chooseProject = (e) => {
        //console.log(e.target)
        this.props.dispatch(getApisByProjectId(11))
    }

    render() {
        return (
            <ul className='m-projects-list'>
            {
                this.props.projects.map((item, index) => {
                    return (
                        <li className='projects-li' key={index} onClick={this.chooseProject}>
                            <a className='projects-name' href='javascript:void(0)'>{item.name}</a>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
}

Projects.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        apis: state.index.apis
    }
}

export default connect(mapStateToProps)(Projects)
