import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowMyself: false,
            keySearch: '',
            isSearch: false
        }
    }
    onClickAvatar = () =>{
        this.setState({
            isShowMyself: !this.state.isShowMyself
        })
    }
    // getClickWindow = () =>{
    //     this.setState({
    //         isShowMyself: false
    //     })
    // }
    onSignOut = () =>{
        this.setState({
            isShowMyself: false
        })
        firebase.auth().signOut();
    }
    onChangeSearch = (e) =>{
        this.setState({
            keySearch: e.target.value,
            isSearch: e.target.value === '' ? false : true
        })
    }
    onClickHideSearch = () =>{
        this.setState({
            keySearch: '',
            isSearch: false
        })
    }
    clearLocalStorage = () =>{
        localStorage.removeItem('index');
        localStorage.removeItem('setting');
    }
    render() {
        const {isShowMyself, keySearch, isSearch} = this.state;
        const {isSignedIn, user} = this.props;
        if(isSignedIn){
            var filterUser = user.filter(item=>item.uid === firebase.auth().currentUser.uid ? item : false);
        }
        if(keySearch){
            var filterUserAll = user.filter(item=>item.name.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1 ? item : '');
        }
        return (
            <header>
                <div id="header">
                    <div className="container-fluid">
                        <div className="header">
                            <div id="logo-search">
                                <div className="logo">
                                    <Link to="/" onClick={this.clearLocalStorage}>
                                        <img className="img-logo" src="https://i.pinimg.com/236x/4b/36/b8/4b36b8138c3b70f7c6ab97c2019878a1.jpg" alt="logo" />
                                    </Link>
                                </div>
                                <div className="search">
                                    <input type="text" placeholder="Tìm kiếm..." className="input-search" value={keySearch} onChange={this.onChangeSearch}/>
                                    <i className="fa fa-search icon-search"></i>
                                    {
                                        isSearch ? 
                                        <div className="searchName">
                                            {
                                                keySearch ? 
                                                filterUserAll.map(item=>item.uid !== firebase.auth().currentUser.uid ? 
                                                <Link to={`/profile/${item.uid}`} key={item.id} className="searchName-child" onClick={this.onClickHideSearch}>
                                                    <img src={item.photo} alt=""/> 
                                                    <span style={{marginLeft: '10px', fontSize: '16px'}}>{item.name}</span>
                                                </Link>
                                                : ''
                                                ) : ''
                                            }
                                            <div className=" p-2">
                                                <Link to={`/search/${keySearch}`} onClick={this.onClickHideSearch}>
                                                    <i className="fa fa-search icon-search"></i> Tìm {keySearch}
                                                </Link>
                                            </div>
                                        </div>
                                        : ''
                                    }
                                    
                                </div>
                                
                               
                            </div>
                            {
                                !isSignedIn ?
                                <div id="login-create">
                                    <div className="login-header">
                                    <Link to="/login-create/login" className="link-login">Đăng nhập</Link>
                                    </div>
                                    <div className="create-header">
                                    <Link to="/login-create/create" className="link-create">Đăng ký</Link>
                                    </div>
                                </div>
                                : 
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="create-post margin-2">
                                        <Link className="link-create" to="/create-post">Tạo bài viết</Link> 
                                    </div>
                                    <div className="icon-header-loginSuccess">
                                        <i className="fa fa-comments-o margin-2"></i>
                                        <i className="fa fa-bell-o margin-2"></i>
                                    </div>
                                    <div className="avatar">
                                        <img className="img-avatar avatar-header-loginSuccess" 
                                        onClick={this.onClickAvatar}
                                        src={filterUser.map(item=>item.photo)} alt="avatar" />
                                        {
                                            isShowMyself ? 
                                            <ul className="list-function-myself">
                                                <li className="item-function">
                                                    <Link className="txt-function" to={`/profile/${filterUser.map(item=>item.uid)}`}>
                                                        <span>{filterUser.map(item=>item.name)}</span>
                                                        <br />
                                                        <span>{filterUser.map(item=>item.email)}</span>
                                                    </Link>
                                                </li>
                                                <li className="item-function">
                                                    <Link className="txt-function" to="/setting">Cài đặt</Link>
                                                </li>
                                                <li className="item-function">
                                                    <Link className="txt-function" to="/manage-user">Quản lý bài viết</Link>
                                                </li>
                                                <li className="item-function">
                                                    <Link className="txt-function" to="/login-create/login" onClick={this.onSignOut}>Đăng xuất</Link>
                                                </li>
                                            </ul>
                                            : false
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
