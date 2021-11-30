import React, { Component } from 'react';
import './Personal.css';
import ArticleSection from '../../layout/section/articleSection/ArticleSection';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';

export default class Personal extends Component {
    constructor(props){
        super(props);
        this.state = {
            random: ''
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
    handleChangeImgProfile = async(e, id) =>{
        const name = e.target.name;
        const reader = new FileReader();
        const storage = firebase.storage();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        const upLoadImage = storage.ref(`images/${this.state.random}`).child(e.target.files[0].name);
            await upLoadImage.put(e.target.files[0]);
            upLoadImage.getDownloadURL().then(url =>{
                if(name === 'avatar'){
                    firebase.database().ref('user').child(id).update({
                        photo: url
                    })
                }
                else if(name === 'coverImg'){
                    firebase.database().ref('user').child(id).update({
                        coverImg: url
                    })
                }
            })
    }
    render() {
        let {post, tag, user, tagPost, onClickLike, dataSetLike, isSignedIn} = this.props;
        let id = this.props.match.params.id;
        return (
            <div className="container-fluid-1 mt-2 mb-5">
                {
                    user.map(item=>
                        item.uid === id ?
                        <div className="profile" key={item.id}>
                            <div className="profileWrapper">
                                <div className="profileContent">
                                    <div className="profileTop">
                                        <div className="profileCoverImg">
                                            <img src={item.coverImg} alt=""  />
                                            {
                                                isSignedIn &&
                                                item.uid === firebase.auth().currentUser.uid ?
                                                <button className="ab-btn-cover__img">
                                                    <i className="fa fa-camera"></i><span style={{marginLeft: '5px'}}> Thay đổi ảnh bìa</span>
                                                    <input name="coverImg" type="file" onChange={(e)=>this.handleChangeImgProfile(e, item.id)} />
                                                </button>
                                                : ''
                                            }
                                        </div>
                                        <div className="profileAvatarImg">
                                            <img src={item.photo} alt="" />
                                            {
                                               isSignedIn &&  
                                               item.uid === firebase.auth().currentUser.uid ?
                                               <div className="bg-file-change-avt">
                                                   <i className="fa fa-camera"></i>
                                                   <input name="avatar" type="file" onChange={(e)=>this.handleChangeImgProfile(e, item.id)}/>
                                               </div>
                                               : ''
                                            }
                                        </div>      
                                    </div>
                                    <div className="profileUserInfo">
                                        <h3 className="profileUsername">{item.name}</h3>
                                        {
                                            item.nickname !== '' ? <h5 className="mt-2">({item.nickname})</h5> : ''
                                        }
                                        <span className="profileUserDesc">
                                            Liên hệ công việc: {item.email}
                                        </span>
                                    </div>

                                    <div className="profileCenter">
                                        <hr className="profileHr" />
                                            <div className="row">
                                                <div className="col-md-4 mb-2">
                                                    <span className="profileIntroTitle">Giới thiệu</span>
                                                    <ul className="profileIntroList">
                                                            {
                                                                item.workplace !== '' ? 
                                                                <li className="profileIntroItem">
                                                                    <span className="profileIntroDes">
                                                                        Làm việc tại {item.workplace}
                                                                    </span>
                                                                </li>
                                                                : ''
                                                            } 
                                                            {
                                                                item.phone !== '' ? 
                                                                <li className="profileIntroItem">
                                                                    <span className="profileIntroDes">
                                                                        Số điện thoại: {item.phone}
                                                                    </span>
                                                                </li>
                                                                : ''
                                                            }        
                                                            {
                                                                item.address !== '' ? 
                                                                <li className="profileIntroItem">
                                                                    <span className="profileIntroDes">
                                                                        Sống tại {item.address}
                                                                    </span>
                                                                </li>
                                                                : ''
                                                            }  
                                                            {
                                                                item.work !== '' ? 
                                                                <li className="profileIntroItem">
                                                                    <span className="profileIntroDes">
                                                                        Công việc hiện tại: {item.work}
                                                                    </span>
                                                                </li>
                                                                : ''
                                                            }  
                                                            {
                                                                item.favorite !== '' ? 
                                                                <li className="profileIntroItem">
                                                                    <span className="profileIntroDes">
                                                                        Sở thích: {item.favorite}
                                                                    </span>
                                                                </li>
                                                                : ''
                                                            }  
                                                        {
                                                            isSignedIn &&
                                                            item.uid === firebase.auth().currentUser.uid ?
                                                            <li className="profileIntroItem">
                                                                <Link className="profileIntroDes link-profileIntroDes" to="/setting/info-setting">Cập nhật thông tin</Link>
                                                            </li>
                                                            : ''     
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="col-md-8">
                                                    {
                                                        post.map((itemPost, index)=>
                                                            itemPost.idUser === item.uid ?
                                                            <ArticleSection item={itemPost} key={index} tag={tag} user={user} tagPost={tagPost}
                                                                onClickLike={onClickLike} dataSetLike={dataSetLike} isSignedIn={isSignedIn} />
                                                            : ''
                                                        )
                                                    }
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ''
                    )
                }
            </div>
        )
    }
}