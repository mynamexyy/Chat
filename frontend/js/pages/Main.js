import React, { Component } from 'react'
import { Layout } from 'antd';

import Content from './Content'
import Header from './Header'

// React component
class Main extends Component {
    render() {
        const { data } = this.props;
        return (<Layout className="layout">
                    <Header />
                    <Content />
                </Layout>)
    }
}

export default Main

