import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
    render() {
        const {show767px} = this.props;
        return (
            <nav>
                <div id="nav">
                    
                    {
                        show767px &&
                        <div className="title-logo">
                            <h3>nature</h3>
                            <button className="crayons-btn" onClick={this.props.closeShow}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="asvul0jgsofc9qcsswf21d0qyr5yjkkh" className="crayons-icon"><title id="asvul0jgsofc9qcsswf21d0qyr5yjkkh">Close</title><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path></svg>
                            </button>
                        </div>
                    }
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
                    <img className="img-nav" src="https://dean2020.edu.vn/wp-content/uploads/2019/03/anh-thien-nhien-dep-3.jpeg" alt="photos" />
                </div>             
            </nav>
        )
    }
}
