import React, { Component } from 'react'
import { BrowserRouter as Router, Route, IndexRoute, Redirect } from 'react-router-dom'

import Index from './pages/index'

class App extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Index} />
                    <Route path="/index" component={Index} />
                    <Redirect from='*' to='/' />
                </div>
            </Router>
        )
    }
}

export default App
