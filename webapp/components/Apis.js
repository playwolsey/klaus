import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cs from 'classnames'
import { getDetailByApiId } from '../actions/index'

import '../style/apis.scss'

class Apis extends Component {
    static propTypes = {
        apis: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired 
    }

    constructor(props) {
        super(props)
        
        this.chooseApi = this.chooseApi.bind(this)
    }

    chooseApi = (e) => {
        this.props.dispatch(getDetailByApiId(e.target.id))
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

const mapStateToProps = state => {
    return {
//        detail: state.index.detail
    }
}

export default connect(mapStateToProps)(Apis)
