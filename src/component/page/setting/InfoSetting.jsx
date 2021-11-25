import React, { Component } from 'react';
import firebase from 'firebase';

export default class InfoSetting extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            nickname: '',
            address: '',
            favorite: '',
            work: '',
            workplace: '',
        }
    }
    onChangeInfo = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    componentDidMount(){
        const {user} = this.props;
        if(user){
            user.filter(item=>item.uid===firebase.auth().currentUser.uid?
                this.setState({
                    name: item.name,
                    phone: item.phone,
                    email: item.email,
                    nickname: item.nickname,
                    address: item.address,
                    favorite: item.favorite,
                    work: item.work,
                    workplace: item.workplace,
                })
            :'')
        }
    }
    onSubmitInfo = (e) =>{
        e.preventDefault();
        const {name, phone, nickname, address, favorite, work, workplace} = this.state;
        this.props.onSubmitInfo(name, phone, nickname, address, favorite, work, workplace);
    }
    render() {
        const {name, phone, email, nickname, address, favorite, work, workplace} = this.state; 
        return (
            <div>
                <div className="border-btn-setting clear-flex-setting">
                    <form action="" onSubmit={this.onSubmitInfo}>
                        <div className="row">
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Tên</label>
                                <br />
                                <input type="text" name="name" value={name} onChange={this.onChangeInfo} required />
                            </div>
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Biệt danh</label>
                                <br />
                                <input type="text" name="nickname" value={nickname} onChange={this.onChangeInfo} />
                            </div>
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Số điện thoại</label>
                                <br />
                                <input type="text" name="phone" value={phone} onChange={this.onChangeInfo} />
                            </div>
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Email</label>
                                <br />
                                <input type="email" name="email" value={email} disabled/>
                            </div>
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Địa chỉ</label>
                                <br />
                                <input type="text" name="address" value={address} onChange={this.onChangeInfo} />
                            </div>
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Công việc</label>
                                <br />
                                <input type="text" name="work" value={work} onChange={this.onChangeInfo} />
                            </div>
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Nơi làm việc</label>
                                <br />
                                <input type="text" name="workplace" value={workplace} onChange={this.onChangeInfo} />
                            </div>
                            <div className="col-md-6 border-btn-setting-grid">
                                <label htmlFor="">Sở thích</label>
                                <br />
                                <input type="text" name="favorite" value={favorite} onChange={this.onChangeInfo} />
                            </div>
                        </div>
                        <input type="submit" value="thay đổi" className="submit-pass-setting" />
                    </form>
                </div>
            </div>
        )
    }
}
