import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Forgot extends Component {
    render() {
        return (
            <div className="form-login">
                <form action="">
                    <div className="box-form__login">
                        <label htmlFor="" className="txt-box__formLogin">Email</label>
                        <input type="email" className="input-box__formLogin" />
                    </div>
                    <div className="link-register__forgot">
                        <Link to="/login-create/login" className="txt-box__formLogin">Đăng nhập</Link>
                        <Link to="/login-create/create" className="txt-box__formLogin">Đăng ký</Link>
                    </div>
                    <input type="submit" className="input-box__formLogin" />
                </form>
            </div>
        )
    }
}
