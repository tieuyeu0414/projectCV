import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className="container-fluid-1 pt-5 pb-5">
                <div id="about">
                    <div className="title-about">
                        <h2 className="txt-title__about">Giới thiệu về Beautiful</h2>
                    </div>
                    <div className="detail-about">
                        <p className="txt-detail__about">- Beautiful là một cộng đồng chia sẻ video, hình ảnh gái xinh cùng nhau.
                            Trang web tạo ra dựa trên một trang web có sẵn trên mạng. Chúng tôi tạo ra để giúp mọi người ngắm gái thỏa mãn con mắt.</p>
                        <img className="img-detail__about" src="https://aleale.com.vn/wp-content/uploads/2016/06/anh-cosplay.jpg" alt="photos" />
                        <p className="txt-detail__about">- Ứng dụng của chúng tôi là mã nguồn mở,
                            có nghĩa là bạn có thể kiểm tra từng chi tiết nhỏ của mã hoặc chip trong chính mình!
                            Chúng tôi đang nỗ lực để cung cấp nền tảng của mình cho bất kỳ ai cũng có thể đứng lên thành lập các cộng
                            đồng tương tự trong bất kỳ lĩnh vực nào hoặc đam mê.</p>
                        <p className="txt-detail__about">- Chúng tôi tin tưởng vào sự minh bạch và gia tăng giá trị cho hệ sinh thái. Chúng tôi hy vọng bạn sẽ quan tâm
                            và thích những gì bạn thấy!</p>
                            <img className="img-detail__about" src="https://nguyendangtam.com/wp-content/uploads/2019/08/anh-gai-xinh-david-collins-1.jpg" alt="photos" />
                        <p className="txt-detail__about">- Beautiful là trang web dành cho các thanh niên chưa vợ, chưa người yêu.
                            Trang web tập hợp các bài viết hình ảnh, video về các cô gái hot girl sexy, nóng bỏng và quyến rũ.
                            Người dùng có thể xem các bài viết, tương tác và đăng bài lên trang web để mọi người cùng xem.</p>
                        <p className="txt-detail__about text-center">
                            <i className="fa fa-heart text-danger icon-detail__about"></i>
                            Chúc mọi người bổ mắt
                            <i className="fa fa-heart text-danger icon-detail__about"></i>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}