import React, { Component } from 'react'
import { Layout } from 'antd';
import { connect } from 'react-redux'

import Content from './Content'
import Header from './Header'

// React component
class Main extends Component {
    render() {
        const { data } = this.props;
        //console.log(this.props)
        return (<Layout className="layout">
                    <Header
                        userinfo={data}
                    />
                    <Content
                        userinfo={data}
                    />
                </Layout>)
    }
}

function mapStateToProps(state) {
    //console.log(state);
    return {
        data: state.SetInfoReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetInfo:(msg)=>{dispatch({ type:'setInfo',data:msg })}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

