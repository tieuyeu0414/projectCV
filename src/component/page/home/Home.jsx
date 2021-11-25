import React, { Component } from 'react';
import Nav from '../../layout/nav/Nav';
import './Home.css';
import Section from '../../layout/section/Section';
import Aside from '../../layout/aside/Aside';

export default class Home extends Component {
    render() {
        const {post, tagPost, tag, user, onFilterTime, filterTime, onClickLike, dataSetLike, isSignedIn} = this.props;
        
        return (
            <div className="container-fluid">
                <div id="home">
                    <div className="row">
                        <div className="col-md-3">
                            <Nav/>
                        </div>
                        <div className="col-md-6">
                            <Section post={post} tagPost={tagPost} tag={tag} user={user} onFilterTime={onFilterTime}
                            filterTime={filterTime} onClickLike={onClickLike} dataSetLike={dataSetLike} isSignedIn={isSignedIn} />
                        </div>
                        <div className="col-md-3">
                            <Aside post={post} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
