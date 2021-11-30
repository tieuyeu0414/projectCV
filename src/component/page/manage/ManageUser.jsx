import React, { Component } from 'react'
import './ManageUser.css'
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import DataManageUser from './DataManageUser';

export default class ManageUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            valueSelectManage: 0,
            searchPostManage: '',
        }
    }
    onSelectManage = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    render() {
        let {post, onDelete, onEdit} = this.props;
        const {valueSelectManage, searchPostManage} = this.state;
        let filterLikePost = post.map(item=>item.idUser === firebase.auth().currentUser.uid ? item.like : 0);
        var sumLike = 0;
        for(let i = 0; i < filterLikePost.length; i++){
            sumLike += filterLikePost[i];
        }
        let filterCmtPost = post.map(item=>item.idUser === firebase.auth().currentUser.uid ? item.comment : 0);
        var sumCmt = 0;
        for(let i = 0; i < filterCmtPost.length; i++){
            sumCmt += filterCmtPost[i];
        }
        let filterLike500 = post.filter(item=>item.idUser === firebase.auth().currentUser.uid && item.like > 500);
        let filterCmt500 = post.filter(item=>item.idUser === firebase.auth().currentUser.uid && item.comment > 500);
        let filterPost = post.filter(item=>item.idUser === firebase.auth().currentUser.uid);
        post.sort((a, b)=>{
    
            if(Number(valueSelectManage) === 1){
                if(a.time.year > b.time.year){
                    return 1;
                }
                if(a.time.year < b.time.year){
                    return -1
                }
                else{
                    if(a.time.month > b.time.month){
                        return 1;
                    }
                    if(a.time.month < b.time.month){
                        return -1;
                    }
                    else{
                        if(a.time.day > b.time.day){
                            return 1;
                        }
                        if(a.time.day < b.time.day){
                            return -1;
                        }
                        else{
                            if(a.time.hour > b.time.hour){
                                return 1;
                            }
                            if(a.time.hour < b.time.hour){
                                return -1;
                            }
                            else{
                                if(a.time.minute > b.time.minute){
                                    return 1;
                                }
                                if(a.time.minute < b.time.minute){
                                    return -1;
                                }
                                else{
                                    if(a.time.second > b.time.second){
                                        return 1;
                                    }
                                    if(a.time.second < b.time.second){
                                        return -1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return -1;
        })
        if(searchPostManage){
            post = post.filter(item=>{
                return item.title.toLowerCase().indexOf(searchPostManage.toLowerCase()) !== -1
            })
        }
        return (
            <div className="container-fluid pt-5 pb-5">
                <div id="manage-user">
                    <div className="title-contact mb-3">
                        <h2 className="txt-title__contact">Quản lý bài viết</h2>
                    </div>
                    <div className="number-like-comment-manage">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-2">
                                <div className="bg-manage__user">
                                    <h4>{sumLike}</h4>
                                    <p>Số lượng like</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 6 mb-2">
                                <div className="bg-manage__user">
                                    <h4>{sumCmt}</h4>
                                    <p>Số lượng comment</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 6 mb-2">
                                <div className="bg-manage__user">
                                    <h4>{filterLike500.length}</h4>
                                    <p>Số lượng like &#62;500</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 6 mb-2">
                                <div className="bg-manage__user">
                                    <h4>{filterCmt500.length}</h4>
                                    <p>Số lượng comment &#62;500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-manage__user">
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="list-manage__user">
                                    <li className="mb-3">
                                        <form action="">
                                            <input type="search" name="searchPostManage" placeholder="Tìm kiếm..." 
                                            className="search-manage__user" value={searchPostManage}
                                            onChange={this.onSelectManage} />
                                        </form>
                                    </li>
                                    <li className="item-manage__user active-manage__user">
                                        <Link to="/" className="link-manage__user">
                                            <span>Bài viết</span>
                                            <span className="number-post-manage__user">{filterPost.length}</span>
                                        </Link>
                                    </li>
                                    <li className="item-manage__user">
                                        <Link to="/" className="link-manage__user">Nhãn dán</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link to="/create-video" className="link-manage__user btn-link-manage__user">Tạo video</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-9">
                                <div className="filter-time-manage__user mb-3">
                                    <h4>Bài viết</h4>
                                    <select name="valueSelectManage" onChange={this.onSelectManage} 
                                    className="listSelect-manage__user" value={valueSelectManage}>
                                        <option value={0}>mới -&#62; cũ</option>
                                        <option value={1}>cũ -&#62; mới</option>
                                    </select>
                                </div>
                                <div className="table-manage__user">
                                    {
                                        post.map((item, index)=>{
                                            return(
                                                item.idUser === firebase.auth().currentUser.uid ?
                                                <DataManageUser key={index} item={item} index={index}
                                                onDelete={onDelete} onEdit={onEdit}/> : ''
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
