import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './LoginCreate.css';
import Login from '../login/Login';
import Create from '../create/Create';
import Forgot from '../forgot/Forgot';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

export default class LoginCreate extends Component {
    render() {
        const {uiConfig, onSubmitSignIn, onSubmitRegister} = this.props;
        return (
            <div className="container-fluid-1 pt-3 pb-3">
                <div id="login">
                    <div className="login">
                        <div className="title-login">
                            <h4 className="txt-title__login">Chào mừng đến với cộng đồng Nature</h4>
                            <p className="text-login">Đến với <Link to="/">Nature</Link> bạn sẽ được chiêm ngưỡng vẻ đẹp của thiên nhiên hùng vĩ</p>
                        </div>
                        <div className="login-internet">
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </div>
                        <div className="border-or-login">
                            <span className="txt-login border-or">or</span>
                        </div>
                        <div>
                            <Route path={`/login-create/login`} component={()=><Login onSubmitSignIn={onSubmitSignIn}/>} />
                            <Route path={`/login-create/create`} component={()=><Create onSubmitRegister={onSubmitRegister}/>} />
                            <Route path={`/login-create/forgot`} component={Forgot} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
