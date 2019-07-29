import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Button } from 'antd';
import AxiosDemo from '../request/AxiosDemo'

// React component
class Counter extends Component {
    render() {
        const { data } = this.props
        return (<div className={'main'}>
                    <Button onClick={this.props.onGetTextActionClick} type="smile" icon="search">
                        发起请求
                    </Button>
                    <span>请求结果:{data.data}</span>
                </div>)
    }
}



function mapStateToProps(state) {
    return {
        data: state.AxiosDemoReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGetTextActionClick:()=>dispatch(AxiosDemo.getText())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

