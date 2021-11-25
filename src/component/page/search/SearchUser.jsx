import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import firebase from 'firebase';

export default class SearchUser extends Component {
    render() {
        const {user, keySearch} = this.props;
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
            </div>
        )
    }
}
