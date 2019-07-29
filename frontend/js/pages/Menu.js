import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (<div className={'menu'}>
                <Link className={'link'} to="/imgesdemo" >图片引用例子</Link>
                <Link className={'link'} to="/datademo" >数据联动例子</Link>
                <Link className={'link'} to="/axiosdemo" >AXIOS加redux例子</Link>
                <Link to="/">清空</Link>
            </div>)
    }
}

module.exports =Menu