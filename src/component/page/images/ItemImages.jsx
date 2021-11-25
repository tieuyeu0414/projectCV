import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemImages extends Component {
    render() {
        const {item, user} = this.props;
        return (
            <div className="box-imgaes mb-4">
                <img className="img-box__images" src={item.photo} alt="photos" />
                {
                    user.map(itemUser=>
                        item.idUser === itemUser.uid ?
                        <div className="avatar-photo" key={itemUser.id}>
                            <Link to="/"><img
                                src={itemUser.photo}
                                alt="avatar" className="img-avatar__images" /></Link>
                            <div className="name-img__avatar-images">
                                <h6>{itemUser.name}</h6>
                            </div>
                        </div>
                        : ''
                    )
                }
            </div>
        )
    }
}