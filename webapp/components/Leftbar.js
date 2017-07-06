import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllProjects } from '../actions/index'

//class ListItem extends Component {
//    render() {
//        return (
//            <li className='project_li'>
//            </li>
//        )
//    }
//}

class List extends Component {
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

class Leftbar extends Component {
    constructor(props) {
        super(props)
        //this.handleChange = this.handleChange.bind(this)
        //this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const { dispatch } = this.props
        console.log('xxx', this.props)
        dispatch(getAllProjects())
    }

    render() {
        return (
            <section id="leftbar" className="m-leftbar">
                //<List />
            </section>
        )
    }
}

Leftbar.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { projects } = state
    return {
        projects
    }
}

export default connect(mapStateToProps)(Leftbar)
