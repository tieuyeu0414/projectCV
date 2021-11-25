import React, { Component } from 'react'
import ItemVideo from './ItemVideo';
import './Videos.css';

export default class Videos extends Component {
    render() {
        const { post, user } = this.props;
        return (
            <div className="container-fluid">
                <div id="videos">
                    <div className="title-tags">
                        <h2 className="txt-title__tags">Video</h2>
                    </div>
                    <div className="row">
                        {
                            post.map(item=>{
                                return item.video !== '' ? <ItemVideo item={item} key={item.id} user={user}/> : false
                            })
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}
