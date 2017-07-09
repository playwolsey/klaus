import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/projects.scss'

export default class Projects extends Component {
    static propTypes = {
        projects: PropTypes.array.isRequired
    }

    render() {
        return (
            <ul className='m-projects-list'>
            {
                this.props.projects.map((item, index) => {
                    return (
                        <li className='projects-li' key={index}>
                            <a className='projects-name' href='javascript:void(0)'>{item.name}</a>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
}
