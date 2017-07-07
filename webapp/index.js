import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Root from './containers/Root'

import './style/reset.scss'
import './style/common.scss'

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('app')
)
