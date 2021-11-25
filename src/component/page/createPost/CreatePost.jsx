import React, { Component } from 'react';
import './CreatePost.css';
import firebase from 'firebase';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';

export default class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            titlePost: '',
            contentPost: '',
            nameImage: '',
            check:[],
            isShowImage: false,
            id: '',
            file: '',
            random: '',
            name: '',
            // isRedirect: false
        }
        this.modules = {
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'blockquote'],
              [{ 'align': [] }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
              ['link', 'image'],
              ['video']
            ],
        }
        this.formats = [
            'header',
            'bold', 'italic', 'underline', 'blockquote',
            'align',
            'list', 'bullet', 'indent',
            'link', 'image', 'video'
        ]
    }
    onChangeCreatePost = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
        if(this.state.id === ''){
            if(target.checked){
                const newLocal = this.state.check;
                newLocal.push(value);   
            }else{
                this.state.check.splice(value, 1);
            }
        }
    }

    onSubmitCreatePost = async(e) =>{
        e.preventDefault();
        const {contentPost, titlePost, check, id, random, name} = this.state;
        const storage = firebase.storage();
        if(this.state.file !== ''){
            const upLoadImage = storage.ref(`images/${random}`).child(this.state.file.name);
            await upLoadImage.put(this.state.file);
            upLoadImage.getDownloadURL().then(url =>{
                this.props.onSubmitCreatePost(contentPost, titlePost, url, check, id, name);
            })
        }
        else{
            this.props.onSubmitCreatePost(contentPost, titlePost, '', check, id, name);
        }
        this.setState({
            isShowImage: false,
            titlePost: '',
            contentPost: '',
            nameImage: '',
            check: '',
            isRedirect: true,
            name: ''
        })
    }
    handleChangeFile = (e) =>{
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            this.setState({
                nameImage: URL.createObjectURL(e.target.files[0]),
                file: e.target.files[0],
                isShowImage: true,
                name: e.target.files[0].name
            })
        }
    }
    handleChangeQuill = (value) =>{
        this.setState({contentPost: value});
    }
    componentDidMount() {
        const {newdata, photo} = this.props;
        if(newdata){
            if(photo === ""){
                this.setState({
                    id: newdata.id,
                    isShowImage: false,
                    titlePost: newdata.title,
                    contentPost: newdata.content,
                    nameImage: newdata.photoTitle,
                    check: '',
                })
            }
            else{
                this.setState({
                    id: newdata.id,
                    isShowImage: true,
                    titlePost: newdata.title,
                    contentPost: newdata.content,
                    nameImage: newdata.photoTitle,
                    check: '',
                })
            }
        }
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
    onDeleteImgCreate = () =>{
        this.setState({
            nameImage: '',
            file: '',
            isShowImage: false
        })
    }
    render() {    

        const {tag, newdata} = this.props;
        const {titlePost, contentPost, isShowImage} = this.state;
        return (
            <div className="container-fluid-1 pt-5 pb-5">
                <div className="bg-create__post">
                    <div id="title-create__post">
                        <div className="title-about">
                            <h2 className="txt-title__about">Tạo bài viết</h2>
                        </div>
                    </div>
                    <form action="" onSubmit={this.onSubmitCreatePost}>
                        <div className="push-create__post">
                            <h5 className="txt-create__post">
                                Thêm ảnh bìa
                                <input type="file" accept=".jpg, .jpeg, .png" className="input-img-create__post" 
                                onChange={this.handleChangeFile} />           
                            </h5> 
                            
                            {
                                isShowImage && 
                               <div>
                                    <br /><img src={this.state.nameImage} alt="" className="img-create__post" style={{objectFit: 'cover'}}/>
                                    <button className="btn-delete-img-create__post bg-danger text-white"
                                    onClick={this.onDeleteImgCreate}>Xóa ảnh</button>
                               </div>
                            }     
                        </div>
                        <div className="push-create__post">
                            <input type="text" className="input-create__post input-title-create__post" name="titlePost" 
                            placeholder="Thêm tiêu đề bài viết" onChange={this.onChangeCreatePost} value={titlePost} required />
                        </div>
                        {
                            newdata ? '' :
                            <div className="push-create__post">
                                <span className="txt-create__post-tag">Thêm nhãn dán</span>
                                <div className="cl-sm-5">
                                    {
                                        tag.map((item, index)=>{
                                            return(
                                                <div key={index} style={{marginRight: '2rem'}}>
                                                    <input type="checkbox" name="checkTag" value={item.id} 
                                                    onChange={this.onChangeCreatePost}  />
                                                    <label style={{marginLeft: '5px'}} htmlFor="checkTag">{item.name}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                        <div className="push-create__post">
                            <ReactQuill value={contentPost} modules={this.modules} formats={this.formats} 
                            onChange={this.handleChangeQuill} required />
                        </div>
                        <input type="submit" className="submit-create__post"/>
                    </form>
                </div>
            </div>
        )
    }
}
