import React, { Component } from 'react';
import ItemTag from './ItemTag';
import './Tags.css';

export default class Tags extends Component {
    render() {
        const {tag} = this.props;
        return (
            <div className="container-fluid">
                <div id="tags">
                    <div className="title-tags">
                        <h2 className="txt-title__tags">Nhãn dán</h2>
                        <input className="search-title__tags" type="search" placeholder="Tìm kiếm nhãn dán..."/>
                    </div>
                    <div className="row">
                        {
                            tag.map(item=>{
                                return(
                                  <ItemTag item={item} key={item.id}/>  
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}