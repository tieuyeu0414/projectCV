import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    onChangeSignIn = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    onSubmitSignIn = (e) =>{
        e.preventDefault();
        const {email, password} = this.state;
        this.props.onSubmitSignIn(email, password);
    }
    render() {
        const {email, password} = this.state;
        return (
            <div className="form-login">
                <form action="" onSubmit={this.onSubmitSignIn}>
                    <div className="box-form__login">
                        <label htmlFor="" className="txt-box__formLogin">Email</label>
                        <input value={email} name="email" type="email" className="input-box__formLogin" 
                        onChange={this.onChangeSignIn} required/>
                    </div>
                    <div className="box-form__login">
                        <label htmlFor="" className="txt-box__formLogin">Mật khẩu</label>
                        <input value={password} name="password" type="password" className="input-box__formLogin" 
                        onChange={this.onChangeSignIn} required />
                    </div>
                    <div className="link-register__forgot">
                        <Link to="/login-create/create" className="txt-box__formLogin">Đăng ký</Link>
                        <Link to="/login-create/forgot" className="txt-box__formLogin">Quên mật khẩu</Link>
                    </div>
                    <input type="submit" className="input-box__formLogin" />
                </form>
            </div>
        )
    }
}