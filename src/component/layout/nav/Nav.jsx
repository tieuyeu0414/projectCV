import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <div id="nav">
                    <ul id="list-nav">
                        <li className="item-nav" title="Trang chủ">
                            <Link to="/" className="link-nav">
                                <i className="fa fa-home icon__list-nav icon__list-nav-1"></i>
                                Trang chủ
                            </Link>
                        </li>
                        <li className="item-nav" title="Hình ảnh">
                            <Link to="/images" className="link-nav">
                                <i className="fa fa-picture-o icon__list-nav icon__list-nav-2"></i>
                                Hình ảnh
                            </Link>
                        </li>
                        <li className="item-nav" title="Video">
                            <Link to="/videos" className="link-nav">
                                <i className="fa fa-video-camera icon__list-nav icon__list-nav-3"></i>
                                Video
                            </Link>
                        </li>
                        <li className="item-nav" title="Nhãn dán">
                            <Link to="/tags" className="link-nav">
                                <i className="fa fa-tags icon__list-nav icon__list-nav-4"></i> 
                                Nhãn dán
                            </Link>
                        </li>
                        <li className="item-nav" title="Giới thiệu">
                            <Link to="/about" className="link-nav">
                                <i className="fa fa-info-circle icon__list-nav icon__list-nav-5"></i>  
                                Giới thiệu
                            </Link>
                        </li>
                        <li className="item-nav" title="Liên hệ">                       
                            <Link to="/contact" className="link-nav">
                                <i className="fa fa-hand-o-right icon__list-nav icon__list-nav-6"></i>
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                    <div id="social__internet-nav">
                        <a href="https://www.facebook.com/smmiusm/" rel="noopener noreferrer" target="_blank" title="Facebook" className="link-social"><i className="fa fa-facebook-official"></i></a>
                        <a href="https://www.instagram.com/tieuyeu0414/" rel="noopener noreferrer" target="_blank" title="Instagram" className="link-social"><i className="fa fa-instagram"></i></a>
                        <a href="https://github.com/tieuyeu0414" rel="noopener noreferrer" target="_blank" title="Github" className="link-social"><i className="fa fa-github"></i></a>
                    </div>
                </div>  
                <div id="img-nav">
                    <img className="img-nav" src="https://gamenoob.net/wp-content/uploads/2021/02/Gai-xinh-tha-nhe-chiec-anh-tam-hon-full-HD.jpg" alt="photos" />
                </div>             
            </nav>
        )
    }
}
