import React, { Component } from 'react';
import './ArticleSection.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

export default class ArticleSection extends Component {
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
        this.props.onClickLike(this.props.item);
    }
    render() {
        const {item, tag, user, tagPost, dataSetLike, isSignedIn} = this.props;
        if(isSignedIn){
            var mapSetLike = dataSetLike.map(itemLike=>itemLike.idUser === firebase.auth().currentUser.uid && itemLike.idPost === item.id ? itemLike.classLike : 0)
            var filterSetLike = mapSetLike.filter(itemLike=>itemLike !== 0 ? itemLike : 0) 
        }
        
        return (
            <article>
                <div className="article-section">
                    {
                        window.location.pathname.indexOf('/chi-tiet-tag/') !== -1 ? 
                        '' :
                        item.photoTitle !== '' ? 
                        <div className="img-article__section">
                            <Link to={`/chi-tiet/${item.id}/${this.ChangeToSlug(item.title)}`}>
                                <img className="img-article" src={item.photoTitle} alt="photos" />
                            </Link>
                        </div>
                        : item.video !== '' ?
                        <div className="img-article__section">
                            <Link to={`/chi-tiet/${item.id}/${this.ChangeToSlug(item.title)}`}>
                                <video src={item.video} width="100%" height="100%"></video>
                            </Link> 
                        </div> : false
                    }
                    <div className="content-article__section">
                        {
                            user.map(itemUser=>{
                                if(itemUser.uid === item.idUser){
                                    return(
                                        <div className="avatar-article__section" key={itemUser.id}>
                                            <Link to={`/profile/${itemUser.uid}`}>
                                                <img src={itemUser.photo} alt="avatar" className="img-avatar" />
                                            </Link>
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
                        <div className="title-article-section">
                            <div className="title-post">
                                <Link to={`/chi-tiet/${item.id}/${this.ChangeToSlug(item.title)}`} className="txt-title">
                                    {item.title}
                                </Link>
                            </div>
                            <div className="tags-post">
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
                            <div className="function-post">
                                <div className="like-post function-hover" onClick={this.onClickLike}>
                                    <i className={`${filterSetLike} fa fa-heart-o icon-function-post`}></i>
                                    <p className="txt-function__post">{item.like} like</p>
                                </div>
                                <Link to={`/chi-tiet/${item.id}/${this.ChangeToSlug(item.title)}`}  
                                className="comment-post function-hover">
                                    <i className="fa fa-comment-o  icon-function-post"></i>
                                    <p className="txt-function__post">{item.comment} comment</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}
