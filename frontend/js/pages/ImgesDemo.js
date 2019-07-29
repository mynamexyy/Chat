import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import {Link} from 'react-router-dom'


// React component
class ImgesDemo extends Component {
    func=()=>{
    
    }
    render() {
        return (<div>
            <img src={require('../../images/1.png')}/>
            <img src={require('../../images/2.jpg')}/>
            <img src={require('../../images/index/3.jpg')}/>
            <div className={'backgroung_img'}>

            </div>
        </div>)
    }
}



module.exports =ImgesDemo