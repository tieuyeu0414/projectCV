import React, { Component } from 'react';
import Aside from '../../layout/aside/Aside';
import './DetailPost.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

export default class DetailPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            contentCmt: '',
            fileCmt: ''
        }
    }
    ChangeToSlug = (str) =>{
        str = str.toLowerCase();     
 
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    onClickLike = () =>{
        let filterPost = this.props.post.map(item=>item.id === this.props.match.params.id ? item : '')
        this.props.onClickLike(...filterPost.filter(item=>item !== '' ? item : ''))
    }
    onChangeCmt = (e) =>{
        const target = e.target;
        const value = target.value;
        this.setState({
            contentCmt: value
        })
    }
    onChangeCmtFile = (e) =>{
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            this.setState({
                fileCmt:readerEvent.target.result,
                isShowImage: true
            })
        }
    }
    onSubmitCmt = (e) =>{
        e.preventDefault();
        let filterPost = this.props.post.map(item=>item.id === this.props.match.params.id ? item : '')
        this.props.onSubmitCmt(this.state.contentCmt, this.state.fileCmt, ...filterPost.filter(item=>item !== '' ? item : ''))
        this.setState({
            contentCmt: '',
            fileCmt: ''
        })
    }
    render() {
        let id = this.props.match.params.id;
        const {post, user, tagPost, tag, dataSetLike, isSignedIn, comment} = this.props
        const {contentCmt} = this.state;
        if(isSignedIn){
            var mapSetLike = post.map(item=>{
                if(item.id === id){
                    return dataSetLike.map(itemLike=>itemLike.idUser === firebase.auth().currentUser.uid && itemLike.idPost === item.id ? itemLike.classLike : 0)              
                }
                return 0
            })
            var filterSetLikeDemo = mapSetLike.filter(item=>item !== 0 ? item : 0)
            for(let i = 0; i < filterSetLikeDemo.length; i++){
                var filterSetLike = filterSetLikeDemo[i].filter(item=>item !== 0 ? item : '');
            }        
        }
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1 d-flex justify-content-center">
                            {
                                post.map(item=>{
                                    if(item.id === id){
                                        return(
                                            <div className="like-post-fixed" key={item.id}>
                                                <div className="link-like" onClick={this.onClickLike}>
                                                    <i className={`${filterSetLike} fa fa-heart-o icon-function-post`}></i>
                                                </div>
                                                <p className="number-like-post">{item.like}</p>
                                            </div>
                                        );
                                    }
                                    return ''
                                })
                            }
                        </div>
                        <div className="col-md-8">
                            {
                                post.map(item=>{
                                    if(item.id === id){
                                        return (
                                            <div style={{padding: '10px 0'}} key={item.id}>
                                                <div className="bg-detail__post">
                                                    {
                                                        item.photoTitle !== '' ?
                                                        <div className="photo-detail__post">
                                                            <img src={item.photoTitle} alt="photoTitle" />
                                                        </div>
                                                        : item.video !== '' ?
                                                        <div className="photo-detail__post video-detail__post">
                                                            <video src={item.video} controls width="100%" height="100%"></video>
                                                        </div> : ''
                                                    }
                                                    <div style={{padding: '2rem 4rem'}}>
                                                        {
                                                            user.map(itemUser=>{
                                                                if(itemUser.uid === item.idUser){
                                                                    return(
                                                                        <div className="avatar-article__section" key={itemUser.id}>
                                                                            <Link to={`/profile/${itemUser.uid}`}><img src={itemUser.photo} alt="avatar" className="img-avatar" /></Link>
                                                                            <div className="name-avatar">
                                                                                <Link to={`/profile/${itemUser.uid}`} className="name-user">{itemUser.name}</Link>
                                                                                <small className="time-post">{item.time.day}/{item.time.month}/{item.time.year}</small>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                                return false;
                                                            })
                                                        }
                                                        <h1 style={{padding: '0.5rem 0', margin: '0'}}>{item.title}</h1>
                                                        <div style={{marginBottom: '10px'}}>
                                                            <div className="cl-sm-5">
                                                                {
                                                                    tagPost.map(itemTagPost=>item.id === itemTagPost.idPost ?
                                                                            tag.map(itemTag=>itemTag.id === itemTagPost.idTag ?
                                                                                <span key={itemTag.id}>
                                                                                    #
                                                                                    <Link to={`/chi-tiet-tag/${itemTag.id}/${this.ChangeToSlug(itemTag.name)}`} className="txt-tags" key={itemTag.id}>{itemTag.name}</Link>
                                                                                </span>
                                                                            : false)
                                                                    : false)
                                                                }
                                                            </div>
                                                        </div>
                                                        <div dangerouslySetInnerHTML={{__html: item.content}} ></div> 
                                                    </div>  
                                                </div>
                                                <div className="bg-detail__post">
                                                    <div className="comment-detail__post">
                                                        <div style={{padding: '2rem 4rem'}}>
                                                            <div className="title-comment-detail__post">
                                                                <h3>Bình luận</h3>
                                                            </div>
                                                            <div className="box-comment-detail__post d-flex">
                                                                {
                                                                    user.map(itemUser=>{
                                                                        if(itemUser.uid === firebase.auth().currentUser.uid){
                                                                            return(
                                                                                <div className="avatar-article__section" key={itemUser.id}>
                                                                                    <Link to={`/profile/${itemUser.uid}`}><img src={itemUser.photo} alt="avatar" className="img-avatar" /></Link>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        return false;
                                                                    })
                                                                }
                                                                <form action="" className="form-box-commemt" onSubmit={this.onSubmitCmt}>
                                                                    <div className="form-comment-detail__post">
                                                                        <textarea name="" id="" cols="30" rows="5" value={contentCmt} onChange={this.onChangeCmt}></textarea>
                                                                        <br />
                                                                        <div className="border-box-comment-detail__post">
                                                                            <input type="file" onChange={this.onChangeCmtFile} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="submit-box-form-detail__post">
                                                                        {
                                                                            contentCmt === '' ? <div className="bg-opacity-5"></div> : ''
                                                                        }
                                                                        <input type="submit" className="submit-comment" />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            
                                                            {
                                                                comment.map(item=>{
                                                                    if(item.idPost === id){
                                                                        return(
                                                                            user.map(itemUser=>{
                                                                                if(itemUser.uid === item.idUser){
                                                                                    return(
                                                                                        <div style={{padding: '10px 0'}} key={itemUser.id}>
                                                                                            <div className="box-comment-detail__post d-flex" >
                                                                                                <div className="avatar-article__section" key={itemUser.id}>
                                                                                                    <Link to="/"><img src={itemUser.photo} alt="avatar" className="img-avatar" /></Link>
                                                                                                </div>
                                                                                                <div className="form-box-commemt">
                                                                                                    <div className="form-comment-detail__post content-cmt-user">
                                                                                                        <div style={{marginBottom: '10px'}}>
                                                                                                            <Link to="/" className="name-comment">{itemUser.name}</Link>
                                                                                                            <span className="time-comment"> • {item.time.day}/{item.time.month}/{item.time.year}</span>
                                                                                                        </div>
                                                                                                        <p>{item.content}</p>
                                                                                                        {
                                                                                                            item.photo === "" ? '' : 
                                                                                                            <div className="photoCmt">
                                                                                                                <img src={item.photo} alt=""/>
                                                                                                            </div>
                                                                                                        }
                                                                                                    </div>
                                                                                                    <div className="function-post">
                                                                                                        {/* <Link to="/" className="like-post function-hover">
                                                                                                            <i className="fa fa-heart-o icon-function-post"></i>
                                                                                                            <p className="txt-function__post">0 like</p>
                                                                                                        </Link> */}
                                                                                                        {/* <Link to={`/chi-tiet/${item.id}/${this.ChangeToSlug(item.title)}`} 
                                                                                                        className="comment-post function-hover">
                                                                                                            <i className="fa fa-comment-o  icon-function-post"></i>
                                                                                                            <p className="txt-function__post">{item.comment} comment</p>
                                                                                                        </Link> */}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    );
                                                                                }
                                                                                return false;
                                                                            })
                                                                        )
                                                                    }
                                                                    return ''
                                                                })
                                                                
                                                            }
                                                            
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        )
                                    }
                                    return ''
                                })
                            }
                        </div>
                        <div className="col-md-3">
                            <div style={{padding: '10px 0'}}>
                                <div id="introduce-user">
                                    {
                                        post.map(item=>item.id === id ?
                                            user.map(itemUser=>{
                                                if(itemUser.uid === item.idUser){
                                                    return(
                                                        <div key={itemUser.id}>
                                                            <div className="header-introduce__user">
                                                                <div className="bg-header-introduce__user"></div>
                                                                <div className="avatar-article__section avatar-introduce__user" key={itemUser.id}>
                                                                    <Link to={`/profile/${itemUser.uid}`}><img src={itemUser.photo} alt="avatar" className="img-avatar" /></Link>
                                                                    <div className="name-avatar">
                                                                        <Link to={`/profile/${itemUser.uid}`} className="name-user">{itemUser.name}</Link>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                            <div className="description-user">
                                                                <p>14 | An Enthusiastic frontend developer, UI/UX Designer and a learner. Focued on ⚛️. Build apps with 💖. Let's connect 🍻</p>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                                return false;
                                            })
                                            : ''
                                        )
                                    }
                                </div>
                            </div>
                            <Aside post={post} />
                            <div className="new__post-aside">
                                <div className="title-new">
                                    <h4 className="txt-title__aside">Bài viết liên quan</h4>
                                </div>
                                <ul className="list-new">
                                    {
                                        post.map(item=>{
                                            return(
                                                <li className="item-new" key={item.id}>
                                                    <Link className="link-new" to={`/chi-tiet/${item.id}/${this.ChangeToSlug(item.title)}`}>
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}