import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Button,List,Avatar,Comment,Input,Form,Layout } from 'antd';
const { TextArea  } = Input;
const { Content} = Layout;
// React component
class MContent extends Component {
    state = {
        value: '',
        submitting:false,
        ip:''
    }
    componentDidMount() {
        this.websocket = new WebSocket('ws://172.17.23.117:8889/api/websocket');
        //this.websocket = new WebSocket('ws://localhost:80/websocket');
        var that = this;
        this.websocket.onopen = function (evt) {
            //console.log(evt)
        };
        this.websocket.onmessage = function(evt) {
            var res = JSON.parse(evt.data)
            //console.log(res)
            if(!that.state.ip&&res.ip){
                var info = {
                    ip:res.ip
                }
                var msg = JSON.parse(res.msg)
                for (var i = 0;i<msg.length-1;i++){
                    if(msg[i].ip == res.ip){
                        var info = {
                            username:msg[i].username,
                            portrait:msg[i].portrait,
                            ip:res.ip
                        }
                        that.setState({
                            ip:res.ip,
                            username:msg[i].username,
                            portrait:msg[i].portrait
                        })
                        
                        info['username'] = msg[i].username;
                        info['portrait'] = msg[i].portrait;
                    }
                }
                that.props.onSetInfo(info)
            }
            that.props.onGetMessge(res)
            
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
            var param = {
                portrait:this.props.userinfo.portrait?this.props.userinfo.portrait:'',
                nmsg:this.state.value
            }
            this.websocket.send(JSON.stringify(param));
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
        console.log(this.props);
        return (<Content className="main">
            <div className={'left'}>
            
            </div>
            <div className={'center'}>
                <div className={'msg_con'}>
                    <List
                        className="comment-list"
                        itemLayout="horizontal"
                        dataSource={data.msg}
                        renderItem={item => {
                            return (
                            <li>
                                <Comment
                                    author={item.username||item.ip}
                                    avatar={item.portrait?<Avatar size="large" src={item.portrait}/>:<Avatar size="large" icon="user" />}
                                    content={this.getMsg(item.msg)}
                                    datetime={this.getDate(item.date)}
                                />
                            </li>
                        )}}
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
        onGetMessge:(msg)=>{dispatch({ type:'getMsg',data:msg })},
        onSetInfo:(msg)=>{dispatch({ type:'setInfo',data:msg })}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MContent)
