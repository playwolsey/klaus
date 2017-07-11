import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Apis extends Component {
    static propTypes = {
        apis: PropTypes.array.isRequired,
    }

    render() {
        return (
            <ul className='m-apis-list'>
            {
                this.props.apis.map((item, index) => {
                    return (
                        <li className='api-li' key={index} onClick={this.chooseApi}>
                            <a className='api-name' id={item.id} href='javascript:void(0)'>{item.name}</a>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
}

export default Apis
