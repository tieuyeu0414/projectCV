import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArticleSection from '../../layout/section/articleSection/ArticleSection';

export default class DetailTag extends Component {
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
    render() {
        let id = this.props.match.params.id;
        const {tag, user, tagPost, post, isSignedIn, dataSetLike} = this.props;
        return (
            <div className="pt-5 pb-5">
                {
                    tag.map(item=>item.id === id ?
                        <div className="container-fluid" key={item.id}>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="article-section">
                                        <div className="content-article__section">
                                            <h3>Giới thiệu</h3>
                                            <h5 style={{color: 'rgba(0, 0, 0, 0.5)'}}>#{item.name}</h5>
                                            <p>{item.content}</p>
                                        </div>  
                                    </div>
                                    
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <h3>Danh sách</h3>
                                    <ul style={{padding: '0'}}>
                                        {
                                            tagPost.map(itemTagPost=>item.id === itemTagPost.idTag ? 
                                                post.map(itemPost=>itemPost.id === itemTagPost.idPost ?  
                                                    <ArticleSection item={itemPost} user={user} 
                                                    key={itemPost.id} tagPost={tagPost} isSignedIn={isSignedIn} 
                                                    dataSetLike={dataSetLike} tag={tag} onClickLike={this.props.onClickLike} />     
                                                : false) : false)
                                        }
                                        
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="new__post-aside">
                                        <div className="title-new">
                                            <h4 className="txt-title__aside">Các nhãn dán</h4>
                                            <div className="mt-3 cl-sm-5">
                                                {
                                                    tag.map(itemTag=>itemTag.id !== id ?
                                                         <Link className="link-tag-detail_tag" to={`/chi-tiet-tag/${itemTag.id}/${this.ChangeToSlug(itemTag.name)}`} key={itemTag.id}>{itemTag.name}</Link>
                                                    :'')
                                                }
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div> : ''
                    )
                }
            </div>
        )
    }
}
