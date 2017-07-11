import React, { Component } from 'react'
import { connect } from 'react-redux'

import Apis from './Apis'

class Mbar extends Component {
    render() {
        const { apis } = this.props

        return (
            <section id="mbar" className="m-mbar">
                <Apis apis={apis}/>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        apis: state.index.apis
    }
}

export default connect(mapStateToProps)(Mbar)
