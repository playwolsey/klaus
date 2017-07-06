import React , { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Leftbar from '../components/Leftbar'
import Mbar from '../components/Mbar'
import ApiContainer from '../components/ApiContainer'

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Leftbar projects={this.props.index.projects} {...this.props}/>
                <Mbar/>
                <ApiContainer/>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        index : state.index
    }
}

export default connect(mapStateToProps)(Index)
