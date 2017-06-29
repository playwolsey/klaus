import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllProjects } from '../actions/index'

class Leftbar extends Component {
    //constructor(props) {
    //    super(props)
    //    //this.handleChange = this.handleChange.bind(this)
    //    //this.handleRefreshClick = this.handleRefreshClick.bind(this)
    //}

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getAllProjects())
    }

    render() {
        return (
            <section id="leftbar" className="m-leftbar">
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
