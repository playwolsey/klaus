import React , { Component } from 'react'
import Header from '../components/Header'
import Leftbar from '../components/Leftbar'
import Mbar from '../components/Mbar'

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Leftbar/>
                <Mbar/>
            </div>
        )
    }
} 

export default Index
