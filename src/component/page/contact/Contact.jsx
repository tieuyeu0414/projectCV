import React, { Component } from 'react';
import './Contact.css';
import Map from './Map';

export default class Contact extends Component {
    render() {
        return (
           <div className="container-fluid pt-5 pb-5">
                <div id="contact">
                    <div className="title-contact mb-3">
                        <h2 className="txt-title__contact">Liên hệ với chúng tôi</h2>
                    </div>
                    <div className="detail-contact">
                        <div className="row">
                            <div className="live-contact col-lg-6 padding-contact">
                                <div className="text-live_contact">
                                    <p className="txt-contact">- Cộng đồng Beautiful rất mong nhận được phản hồi từ bạn!</p>
                                    <p className="txt-contact">- Liên hệ với chúng tôi bằng các cách sau: </p>
                                    <ul className="list-live__contact">
                                        <li className="item-live__contact">
                                            <p className="txt-contact">Số điện thoại: 0943856881</p>
                                        </li>
                                        <li className="item-live__contact">
                                            <p className="txt-contact">Email: hailong14092000@gmail.com</p>
                                        </li>
                                        <li className="item-live__contact">
                                            <p className="txt-contact">Địa chỉ: Số 11 - Sài Đồng - Long Biên - Hà Nội</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="map-contact mb-3">
                                    <Map/>
                                </div>
                            </div>
                            <div className="col-lg-6 padding-contact">
                                <p className="txt-contact">- Liên hệ với chúng tôi qua form dưới đây:</p>
                                <div className="form-contact">
                                    <form action="">
                                        <input className="set-contact" type="text" placeholder="Nhập họ tên" required />
                                        <input className="set-contact" type="text" placeholder="Nhập số điện thoại" required />
                                        <input className="set-contact" type="email" placeholder="Nhập Email" required />
                                        <textarea className="set-contact" placeholder="Nhập nội dung" name="" id="" cols="30" rows="10"></textarea>
                                        <input className="set-contact" type="submit" value="Gửi"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-contact">
                        
                    </div>
                </div>
           </div>
        )
    }
}
