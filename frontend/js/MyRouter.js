import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import {BrowserRouter,Route ,hashHistory} from 'react-router-dom'
import store from './store/store'

import Main from './pages/Main'
export default class MyRouter extends Component {
    render() {
        return (
            
                <Provider store={store}>
                    <BrowserRouter history={hashHistory}>
                        <div>
                            <Route name='index' path='/' component={Main}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
            
        )
    }
}