import React, { Component } from 'react';
import './Images.css';
import ItemImages from './ItemImages';

export default class Images extends Component {
    render() {
        const {image, user} = this.props;
        return (
            <div className="container-fluid">
                <div id="images">
                    <div className="title-tags">
                        <h2 className="txt-title__tags">Hình ảnh</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            {
                                image.map(item=>{
                                    if(item.location === 1){
                                        return(
                                            <ItemImages item={item} key={item.id} user={user}/>
                                        )
                                    }
                                    return false;
                                })
                            }
                        </div>
                        <div className="col-md-4">
                            {
                                image.map(item=>{
                                    if(item.location === 2){
                                        return(
                                            <ItemImages item={item} key={item.id} user={user}/>
                                        )
                                    }
                                    return false;
                                })
                            }
                        </div>
                        <div className="col-md-4">
                            {
                                image.map(item=>{
                                    if(item.location === 3){
                                        return(
                                            <ItemImages item={item} key={item.id} user={user}/>
                                        )
                                    }
                                    return false;
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
