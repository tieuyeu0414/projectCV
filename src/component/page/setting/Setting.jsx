import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import InfoSetting from './InfoSetting';
import PublicSetting from './PublicSetting';
import './Setting.css';
import firebase from 'firebase';

export default class Setting extends Component {
    componentDidMount(){
        let tabs = document.querySelectorAll('.link-itme-setting');
        tabs.forEach((tab,index) => {
            // debugger
            document.querySelector('.link-itme-setting.active-setting').classList.remove('active-setting');
            if(!localStorage.getItem('setting')) {
                tabs[0].classList.add('active-setting');
                tab.addEventListener('click', function(){
                    document.querySelector('.link-itme-setting.active-setting').classList.remove('active-setting');
                    this.classList.add('active-setting');
                    localStorage.setItem('setting',index);
                })
            } 
            else {
                tabs[localStorage.getItem('setting')].classList.add('active-setting');
                tab.addEventListener('click', function(){
                    document.querySelector('.link-itme-setting.active-setting').classList.remove('active-setting');
                    this.classList.add('active-setting');
                    localStorage.setItem('setting',index);
                })
            }
        })
    }
    onSubmitChangePass = (rePassword, newPassword, oldPassword) =>{
        const {user} = this.props; 
        user.filter(item=>item.uid === firebase.auth().currentUser.uid ?
            item.password === oldPassword ? 
            item.password !== newPassword ?
            newPassword === rePassword ?
            firebase.database().ref('user').child(item.id).update({
                password: newPassword
            })
            : alert('Mật khẩu nhập lại không trùng khớp')
            : alert('Mật khẩu mới không được trùng mật khẩu cũ!')
            : alert('Nhập mật khẩu sai!')
            : false
        )
    }
    onSubmitInfo = (name, phone, nickname, address, favorite, work, workplace) =>{
        const {user} = this.props; 
        user.filter(item=>item.uid === firebase.auth().currentUser.uid ?
            firebase.database().ref('user').child(item.id).update({
                name: name,
                phone: phone,
                nickname: nickname,
                favorite: favorite,
                work: work,
                workplace: workplace,
                address: address
                
            })
            : false
        )
    }
    render() {
        const match = this.props.match;
        const {user} = this.props; 
        return (
            <div className="container-fluid-1 pt-5 pb-5">
                <div id="setting">
                    <h3>Cài đặt</h3>
                </div>
                <div className="link-setting">
                    <Link className="link-itme-setting active-setting" to={match.url}> Cài đặt chung</Link>
                    <Link to={`${match.url}/info-setting`} className="link-itme-setting"> Cài đặt thông tin cá nhân</Link>
                </div>
                <div className="article-section">
                    <div className="content-article__section">
                        <Route path={match.path} component={() => <PublicSetting onSubmitChangePass={this.onSubmitChangePass}/>} exact/>     
                        <Route path={`${match.path}/info-setting`} component={()=><InfoSetting user={user} onSubmitInfo={this.onSubmitInfo}/>}/>                             
                    </div>    
                </div> 
            </div>
        )
    }
}
