import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Search.css';
import SearchAll from './SearchAll';
import SearchPost from './SearchPost';
import SearchUser from './SearchUser';

export default class Search extends Component {
    componentDidMount(){
        let tabs = document.querySelectorAll('.item-search');
        tabs.forEach((tab,index) => {
            // debugger
            document.querySelector('.item-search.active-search').classList.remove('active-search');
            if(!localStorage.getItem('index')) {
                tabs[0].classList.add('active-search');
                tab.addEventListener('click', function(){
                    document.querySelector('.item-search.active-search').classList.remove('active-search');
                    this.classList.add('active-search');
                    localStorage.setItem('index',index);
                })
            } 
            else {
                tabs[localStorage.getItem('index')].classList.add('active-search');
                tab.addEventListener('click', function(){
                    document.querySelector('.item-search.active-search').classList.remove('active-search');
                    this.classList.add('active-search');
                    localStorage.setItem('index',index);
                })
            }
        })
    }
    render() {
        const {tag, user, tagPost, dataSetLike, isSignedIn, post} = this.props;
        const match = this.props.match;
        const key = match.params.key;
        return (
            <div className="pt-5 pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="article-section">
                                <div className="content-article__section">
                                    <div className="title-search">
                                        <h3>Kết quả tìm kiếm</h3>
                                    </div>
                                    <ul className="list-search">
                                        <li className="item-search active-search">
                                            <Link className="link-item-search link-manage__user" to={match.url}>
                                                Tất cả
                                            </Link>
                                        </li>
                                        <li className="item-search">
                                            <Link className="link-item-search link-manage__user" to={`${match.url}/search-post`}>
                                                Bài viết
                                            </Link>
                                        </li>
                                        <li className="item-search">
                                            <Link className="link-item-search link-manage__user" to={`${match.url}/search-user`}>
                                                Mọi người
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <Route path={match.path} component={() => <SearchAll tag={tag} post={post} user={user} tagPost={tagPost} 
                            isSignedIn={isSignedIn} dataSetLike={dataSetLike} onClickLike={this.props.onClickLike} 
                            keySearch={key}/>} exact/>    
                            <Route path={`${match.path}/search-post`} component={() => <SearchPost tag={tag} post={post} user={user} tagPost={tagPost} 
                            isSignedIn={isSignedIn} dataSetLike={dataSetLike} onClickLike={this.props.onClickLike} 
                            keySearch={key}/>}/>
                            <Route path={`${match.path}/search-user`} component={() => <SearchUser user={user} keySearch={key}/>}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
