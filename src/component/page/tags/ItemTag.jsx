import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemTag extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="col-md-4 mb-4">
                <div className="box-tags">
                    <Link to={`/chi-tiet-tag/${item.id}/${item.name}`} className="text-tags"><span>#</span>{item.name}</Link>
                    <p className="txt-detail-tags">{item.content}</p>
                    
                </div>
            </div>
        )
    }
}
