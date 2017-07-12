import React , { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Leftbar from '../components/Leftbar'
import Mbar from '../components/Mbar'
import ApiDetail from '../components/ApiDetail'

export default class AppContainer extends Component {
    render() {
        return (
            <div>
                <div className="g-hd"><Header/></div>
                <div className="g-bd">
                    <Leftbar/>
                    <Mbar/>
                    <ApiDetail/>
                </div>
            </div>
        )
    }
} 
