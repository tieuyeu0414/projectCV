import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            phone: '',
            nickname: '',
            repassword: ''
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
    onSubmitRegister = (e) =>{
        e.preventDefault();
        const {nickname, phone, email, password, repassword} = this.state;
        this.props.onSubmitRegister(nickname, phone, email, password, repassword);
    }
    render() {
        const {nickname, phone, email, password, repassword} = this.state;
        return (
            <div className="form-login">
                <form action="" onSubmit={this.onSubmitRegister}>
                    <div className="box-form__login">
                        <label htmlFor="" className="txt-box__formLogin">Tên</label>
                        <input value={nickname} name="nickname" type="text" className="input-box__formLogin" 
                        onChange={this.onChangeSignIn} pattern="{3,15}" required 
                        title="Biệt danh phải được nhập trong khoảng từ 3 đến 15 ký tự"
                        />
                    </div>
                    <div className="box-form__login">
                        <label htmlFor="" className="txt-box__formLogin">Số điện thoại</label>
                        <input value={phone} name="phone" type="text" className="input-box__formLogin" 
                        onChange={this.onChangeSignIn} pattern="[0-9]{10,12}" required
                        title="Số điện thoại phải được nhập trong khoảng từ 8 đến 12 ký tự số" 
                        />
                    </div>
                    <div className="box-form__login">
                        <label htmlFor="" className="txt-box__formLogin">Email</label>
                        <input value={email} name="email" type="email" className="input-box__formLogin" 
                        onChange={this.onChangeSignIn} required />
                    </div>
                    <div className="box-form__login">
                        <label htmlFor="" className="txt-box__formLogin">Mật khẩu</label>
                        <input value={password} name="password" type="password" className="input-box__formLogin" 
                        onChange={this.onChangeSignIn} required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,}.*$" 
                        title="Mật khẩu phải có ít nhất một chữ hoa, chữ thường, số, ký tự đặc biệt và có độ dài từ 6 ký tự trở lên" 
                        />
                    </div>
                    <div className="box-form__login">
                        <label htmlFor="" className="txt-box__formLogin">Nhập lại mật khẩu</label>
                        <input value={repassword} name="repassword" type="password" className="input-box__formLogin"
                         onChange={this.onChangeSignIn} required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,}.*$" 
                         title="Mật khẩu phải có ít nhất một chữ hoa, chữ thường, số, ký tự đặc biệt và có độ dài từ 6 ký tự trở lên"/>
                    </div>
                    <div className="link-register__forgot">
                        <Link to="/login-create/login" className="txt-box__formLogin">Đăng nhập</Link>
                        <Link to="/login-create/forgot" className="txt-box__formLogin">Quên mật khẩu</Link>
                    </div>
                    <input type="submit" className="input-box__formLogin" />
                </form>
            </div>
        )
    }
}
