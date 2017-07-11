import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import '../style/apis.scss'

class Apis extends Component {
    static propTypes = {
        apis: PropTypes.array.isRequired,
    }

    render() {
        return (
            <ul className='m-apis-list'>
            {
                this.props.apis.map((item, index) => {
                    let className = cs('method', item.method)
                    return (
                        <li className='api-li' key={index} onClick={this.chooseApi}>
                            <a className='api-name' id={item.id} href='javascript:void(0)'>
                                <label className={className}>{item.method}</label><label>{item.name}</label>
                            </a>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
}

export default Apis
