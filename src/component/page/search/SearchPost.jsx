import React, { Component } from 'react'
import ArticleSection from '../../layout/section/articleSection/ArticleSection';

export default class SearchPost extends Component {
    render() {
        const {tag, user, tagPost, dataSetLike, isSignedIn, keySearch, post} = this.props;
        return (
            <div>
                {
                    post.map(itemPost=>itemPost.title.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1 ?  
                        <ArticleSection item={itemPost} user={user} 
                        key={itemPost.id} tagPost={tagPost} isSignedIn={isSignedIn} 
                        dataSetLike={dataSetLike} tag={tag} onClickLike={this.props.onClickLike} />     
                    : '')
                }    
            </div>
        )
    }
}
