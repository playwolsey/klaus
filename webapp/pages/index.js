import React , { Component } from 'react'
import Header from '../components/Header'
import Leftbar from '../components/Leftbar'
import Mbar from '../components/Mbar'
import ApiContainer from '../components/ApiContainer'

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Leftbar/>
                <Mbar/>
                <ApiContainer/>
            </div>
        )
    }
} 

export default Index
