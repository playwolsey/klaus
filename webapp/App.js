import React from 'react'
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import { Home } from './pages'

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="index" component={Home}></Route>
                <Redirect from='*' to='/' />
            </Router>
        )
    }
}

export default App
