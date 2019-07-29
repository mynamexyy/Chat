import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Spin} from 'antd'

export default {
    showloading: function (delayCloseTime) {
        var div = document.createElement('div');
        div.id = 'loadingmodal';
        document.body.appendChild(div);
        ReactDOM.render((<Spin size="large"/>), div);
        if (delayCloseTime) {
            setTimeout(function () {
                var lnode = document.getElementById('loadingmodal');
                if (lnode) {
                    var pnode = lnode.parentNode;
                    ReactDOM.unmountComponentAtNode(pnode);
                    var ppnode = pnode.parentNode;
                    ppnode.removeChild(pnode);
                }
            }, delayCloseTime);
        }
    },
    hideloading: function () {
        var lnode = document.getElementById('loadingmodal');
        if (lnode) {
            var pnode = lnode.parentNode;
            pnode.removeChild(lnode)
            //ReactDOM.unmountComponentAtNode(pnode);
        }
    },
    getBaseUrl:function(){
        return 'http://172.17.23.117:8889'
    }
};
