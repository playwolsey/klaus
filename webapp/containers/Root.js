import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import App from './AppContainer'
import Login from './LoginContainer'


export default class Root extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact  path="/" component={App} />
                    <Route path="/index" component={App} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        )
    }
}
