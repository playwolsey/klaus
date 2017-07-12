import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/apidetail.scss'

class ApiDetail extends Component {
    static propTypes = {
        detail: PropTypes.object.isRequired
    }

    render() {
        return (
            <section id="apidetail" className='m-apidetail'>
            </section>
        )
    }
}

export default ApiDetail
