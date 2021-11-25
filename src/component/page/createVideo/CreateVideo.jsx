import React, { Component } from 'react'
import './CreateVideo.css';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';

export default class CreateVideo extends Component {
    constructor(props){
        super(props);
        this.state = {
            video: '',
            nameVideo: '',
            file: '',
            videoDemo: '',
            random: '',
        }
    }
    componentDidMount() {
        setInterval(()=>{
            let random = uuidv4();
            this.setState({
                random: random
            })
        },2000);
    }
    componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
        };
    }
    handleVideo = (e) =>{
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = () => {
            this.setState({
                file: e.target.files[0],
                videoDemo: URL.createObjectURL(e.target.files[0])
            })
        }
    }
    onDelete = () =>{
        this.setState({
            nameVideo: '',
            file: '',
            videoDemo: ''
        })
    }
    onSubmit = async(e) =>{
        e.preventDefault();
        const storage = firebase.storage();
        const upLoadVideo = storage.ref(`video/${this.state.random}`).child(this.state.file.name);
        await upLoadVideo.put(this.state.file);
        upLoadVideo.getDownloadURL().then(url =>{
            this.handleSetVideoData(url);
        })
    }
    handleSetVideoData = (url) =>{
        const dataTime = new Date();
        const date = dataTime.getDate();
        const month = dataTime.getMonth() + 1;
        const year = dataTime.getFullYear();
        const hour = dataTime.getHours();
        const minute = dataTime.getMinutes();
        const second = dataTime.getSeconds();
        firebase.database().ref('post').push({
                title: this.state.nameVideo,
                photoTitle: '',
                video: url,
                time: {hour: hour, minute: minute, second: second, day: date, month: month, year: year},
                like: 0,
                comment: 0,
                idUser: firebase.auth().currentUser.uid,
                content: ''
        })
        this.setState({
            nameVideo: '',
            videoDemo: '',
            file: ''
        })
    }
    onChangeTitle = (e) =>{
        this.setState({
            nameVideo: e.target.value
        })
    }
    render() {
        const {videoDemo, nameVideo} = this.state;
        return (
            <div className="container-fluid mt-5 mb-5">
                <div id="video" className="text-center">
                    <h2 className="txt-title-createVideo"><i className="fa fa-video-camera"></i> Tạo video <i className="fa fa-file-video-o"></i></h2>
                    <form action="" onSubmit={this.onSubmit}>
                        <div className="bg-createVideo">  
                            {videoDemo === '' ?  <input type="file" onChange={this.handleVideo} accept=".mp4" required /> :        
                                <div>
                                    <input type="text" className="mb-3 title-createVideo" value={nameVideo}
                                    onChange={this.onChangeTitle} placeholder="Tên video" required/>
                                    <div className="text-center">
                                        <video src={videoDemo} width="400" controls />
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <button className="btn-create-video bg-danger text-white" onClick={this.onDelete}>Xóa</button>
                                        <button className="btn-create-video bg-primary text-white" type="submit">Lưu</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
