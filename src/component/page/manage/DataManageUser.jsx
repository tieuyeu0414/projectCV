import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DataManageUser extends Component {
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
    onDelete = () =>{
        if(window.confirm('Bạn có muốn xóa bài viết?')){
            this.props.onDelete(this.props.item);
        }
    }
    onEdit = () =>{
        this.props.onEdit(this.props.index);
    }
    render() {
        const {item} = this.props;
        return (
            <div className="row-table-manage__user">
                <div className="nametime-post-manage__user">
                    <Link to={`/chi-tiet/${item.id}/${item.title}`} className="name-manage__user">{item.title}</Link>
                    <h4 className="time-manage__user">Thời gian: <span>{item.time.hour}-{item.time.minute}-{item.time.second}/{item.time.day}/{item.time.month}/{item.time.year}</span></h4>
                </div>
                <div className="width-likeCmt-manage__user">
                    <div className="like-comment-manage__user">
                        <div className="p-2">
                            <i className="fa fa-heart-o icon-function-post"></i>
                            <span className="txt-function__post">{item.like}</span>
                        </div>
                        <div className="p-2">
                            <i className="fa fa-comment-o icon-function-post"></i>
                            <span className="txt-function__post">{item.comment}</span>
                        </div>
                    </div>
                </div>
                <div className="function-manage__user">
                    <Link to="/edit">
                        <button className="bg-primary text-white btn-manage__user" onClick={this.onEdit}>Sửa</button>
                    </Link>
                    <button className="bg-danger text-white btn-manage__user" onClick={this.onDelete}>Xóa</button>
                </div>
            </div>
        )
    }
}