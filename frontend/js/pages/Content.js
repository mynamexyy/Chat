import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Button,List,Avatar,Comment,Input,Form,Layout } from 'antd';
import AxiosDemo from '../request/AxiosDemo'
const { TextArea  } = Input;
const { Content} = Layout;
// React component
class MContent extends Component {
    state = {
        value: '',
        submitting:false
    }
    componentDidMount() {
        //this.websocket = new WebSocket('ws://172.17.23.117:8889/api/websocket');
        this.websocket = new WebSocket('ws://localhost:80/websocket');
        var that = this;
        this.websocket.onopen = function (evt) {};
        this.websocket.onmessage = function(evt) {
            var msgarr = JSON.parse(evt.data)
            //console.log('msgarr',msgarr)
            that.props.onGetMessge(msgarr)
            that.setState({
                submitting:false
            })
        };
        this.websocket.onerror = function (evt) {};
    }
    getMsg = (msg) =>{
        return (<p>
            {msg}
        </p>)
    }
    getDate = (time) =>{
        return (<span>
            {time}
        </span>)
    }
    onSend = () =>{
        this.setState({
            submitting:true
        },function() {
            this.websocket.send(this.state.value);
            this.setState({
                value:''
            })
        })
        
        //this.props.onGetMessge(`[{"username": "127.0.0.1", "date": "2019-07-25 17:….0.1", "date": "2019-07-25 18:07:58", "msg": ""}]`)
    }
    onChange = (e)=>{
        this.setState({
            value: e.target.value,
        })
    }
    render() {
        const { data } = this.props;
        return (<Content className="main">
            <div className={'left'}>
            
            </div>
            <div className={'center'}>
                <div className={'msg_con'}>
                    <List
                        className="comment-list"
                        itemLayout="horizontal"
                        dataSource={data.msg}
                        renderItem={item => (
                            <li>
                                <Comment
                                    author={item.username}
                                    avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                                    content={this.getMsg(item.msg)}
                                    datetime={this.getDate(item.date)}
                                />
                            </li>
                        )}
                    />
                </div>
                <div>
                    <Form.Item>
                        <TextArea rows={4} onChange={this.onChange} value={this.state.value} />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" loading={this.state.submitting} onClick={this.onSend} type="primary">
                            发送
                        </Button>
                    </Form.Item>
                </div>
            </div>
            <div className={'right'}>
            
            </div>
        </Content>)
    }
}



function mapStateToProps(state) {
    setTimeout(function(){
        var ele = document.getElementsByClassName('msg_con')[0];
        if(ele){
            ele.scrollTop = ele.scrollHeight;
        }
    },100)
    return {
        data: state.MsgReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGetTextActionClick:()=>dispatch(AxiosDemo.getText()),
        onGetMessge:(msg)=>{dispatch({ type: 'getMsg',data:msg })}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MContent)
