import React, { Component } from 'react'

export default class PublicSetting extends Component {
    constructor(props){
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            rePassword: '',
        }
    }
    onChangePass = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    onSubmitChangePass = (e) =>{
        e.preventDefault();
        const {rePassword, newPassword, oldPassword} = this.state;
        this.props.onSubmitChangePass(rePassword, newPassword, oldPassword);
    }
    render() {
        const {oldPassword, newPassword, rePassword} = this.state;
        return (
            <div>
                <div className="border-btn-setting">
                    <p>chế độ tối</p>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                </div>
                <div className="border-btn-setting">
                    <p>Thay đổi ngôn ngữ</p>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                </div>
                <div className="border-btn-setting clear-flex-setting">
                    <p>Thay đổi mật khẩu</p>
                    <form action="" onSubmit={this.onSubmitChangePass}>
                        <div className="row">
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Mật khẩu cũ</label>
                                <br />
                                <input type="password" name="oldPassword" onChange={this.onChangePass} value={oldPassword} />
                            </div>
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Mật khẩu mới</label>
                                <br />
                                <input type="password" name="newPassword" required onChange={this.onChangePass} value={newPassword} />
                            </div>
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Nhập lại mật khẩu</label>
                                <br />
                                <input type="password" name="rePassword" required onChange={this.onChangePass} value={rePassword} />
                            </div>
                        </div>
                        <input type="submit" value="thay đổi" className="submit-pass-setting" />
                    </form>
                </div>
            </div>
        )
    }
}