import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Projects extends Component {
    static propTypes = {
        projects: PropTypes.array.isRequired
    }

    render() {
        return (
            <ul className='m-projects-list'>
            {
                this.props.projects.map((item, index) => {
                    return <li className='projects-li' key={index}>{item.name}</li>
                })
            }
            </ul>
        )
    }
}
