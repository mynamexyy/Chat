import React, { Component } from 'react'
import { Modal ,Upload, Icon, message } from 'antd';
import Util from '../common/Util'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'|| file.type === 'image/gif';
    if (!isJpgOrPng) {
        message.error('只能上传JPG/PNG/GIF类型的文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('图片不能超过2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export default class UploadModel extends Component{
    state = {
        picvisible:false,
        loading: false,
    }
    handleShow=()=>{
        this.setState({
            picvisible:true
        })
    }
    handleUpPic=()=>{
        this.setState({
            picvisible:false
        })
    }
    handleCancel=(state)=>{
        this.setState({
            picvisible:false
        })
    }
    
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>{
                    this.setState({
                        imageUrl,
                        loading: false,
                    })
                    this.props.setPortrait(imageUrl);
                    window.mimageUrl = imageUrl;
                }
            );
        }
    };
    render(){
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (<Modal
                className={'UploadModel'}
                title="上传头像"
                visible={this.state.picvisible}
                onOk={this.handleCancel}
                onCancel={this.handleCancel}
            >
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    //action={Util.getBaseUrl()+"/upportrait"}
                    data={{ip:this.props.info.ip}}
                    action={"api/upportrait"}
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </Modal>)
    }
}