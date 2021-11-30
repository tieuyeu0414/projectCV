import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container-fluid-footer">
                    <div className="text-center">
                        <h6>Giới thiệu</h6>
                        <p className="text-justify">Nature là trang web về thiên nhiên, phong cảnh.</p>
                        <p>Trang web tập hợp các bài viết hình ảnh, video về những nơi đẹp lung linh và rất chill.</p>
                        <p>Người dùng có thể xem các bài viết, tương tác và đăng bài lên trang web để mọi người cùng xem.</p>
                        <p>Chúc mọi người thỏa mãn.</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <hr />
                    <div className="row d-flex align-items-center">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
                                <Link to="#"> Nature</Link>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a href="https://www.facebook.com/smmiusm/" rel="noopener noreferrer" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/tieuyeu0414/" rel="noopener noreferrer" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://github.com/tieuyeu0414" rel="noopener noreferrer" target="_blank" title="github"><i className="fa fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}