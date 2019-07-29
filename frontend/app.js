import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import MyRouter from './js/MyRouter'
import './style/main.scss'

ReactDOM.render(
  <MyRouter  />,
  document.getElementById('root')
)