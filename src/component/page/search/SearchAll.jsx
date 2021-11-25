import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ArticleSection from '../../layout/section/articleSection/ArticleSection';
import firebase from 'firebase';

export default class SearchAll extends Component {
    render() {
        const {tag, user, tagPost, dataSetLike, isSignedIn, keySearch, post} = this.props;
        return (
            <div>
                {
                    user.map(itemUser=>{
                        if(itemUser.uid !== firebase.auth().currentUser.uid){
                            if(itemUser.name.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1){
                                return(
                                    <div className="article-section" key={itemUser.id}>
                                        <div className="content-article__section">
                                            <div className="avatar-article__section" key={itemUser.id}>
                                                <Link to={`/profile/${itemUser.uid}`}> <img src={itemUser.photo} alt="avatar" className="img-avatar" />
                                                </Link>
                                                <div className="name-avatar">
                                                    <Link to={`/profile/${itemUser.uid}`} className="name-user">
                                                    {itemUser.name}
                                                    </Link>
                                                    {itemUser.address !== '' ? <p>{itemUser.address}</p> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        }
                        return false;
                    })
                }
                {
                    post.map(itemPost=>itemPost.title.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1 ?
                    <ArticleSection item={itemPost} user={user} key={itemPost.id} tagPost={tagPost} isSignedIn={isSignedIn}
                        dataSetLike={dataSetLike} tag={tag} onClickLike={this.props.onClickLike} />
                    : '')
                }
            </div>
        )
    }
}