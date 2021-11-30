import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemVideo extends Component {
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
        const {item, user} = this.props;
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="box-videos">
                    <Link to={`/chi-tiet/${item.id}/${this.ChangeToSlug(item.title)}`} className="link-video">
                        <video className="video-detail" src={item.video} />
                    </Link> 
                    <div className="review-video">
                        <Link to="/" className="link-video">
                            <h4>{item.title}</h4>
                        </Link> 
                        
                        {
                            user.map(itemUser=>{
                                if(itemUser.uid === item.idUser){
                                    return(
                                        <div className="avatar-article__section" key={itemUser.id}>
                                            <Link to={`/profile/${itemUser.uid}`}>
                                                <img src={itemUser.photo} alt="avatar" className="img-avatar" />
                                            </Link>
                                            <div className="name-avatar">
                                                <Link to={`/profile/${itemUser.uid}`} className="name-video">{itemUser.name}</Link>
                                             </div>
                                        </div>
                                    );
                                }
                                return false;
                            })
                        }
                    </div>        
                </div>
            </div>
        )
    }
}
