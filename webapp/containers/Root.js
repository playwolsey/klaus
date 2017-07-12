import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import App from './AppContainer'

export default class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={App} />
                    <Route path="/index" component={App} />
                    <Redirect from='*' to='/' />
                </div>
            </Router>
        )
    }
}
