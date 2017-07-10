import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllProjects } from '../actions/index'

import Projects from '../components/Projects'

class Leftbar extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getAllProjects())
    }

    render() {
        const { projects } = this.props

        return (
            <section id="leftbar" className="m-leftbar">
                <Projects projects={ projects }/>
            </section>
        )
    }
}

Leftbar.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        projects: state.index.projects
    }
}

export default connect(mapStateToProps)(Leftbar)
