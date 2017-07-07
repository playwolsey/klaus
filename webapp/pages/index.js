import React , { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Leftbar from '../components/Leftbar'
import Mbar from '../components/Mbar'
import ApiDetail from '../components/ApiDetail'

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Leftbar/>
                <Mbar/>
                <ApiDetail/>
            </div>
        )
    }
} 

export default Index
