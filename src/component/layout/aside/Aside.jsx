import React, { Component } from 'react'
import './Aside.css';
import NewAside from './NewAside';
import TopAside from './TopAside';

export default class Aside extends Component {
    render() {
        let {post} = this.props;
        post = post.slice(0, 10);
        return (
            <aside>
                <div id="aside">
                    <div id="top10__post-aside">
                        <div className="title-top10">
                            <h4 className="txt-title__aside">Top 10 thịnh hành</h4>
                        </div>
                        <ul className="list-top10">
                            {
                                post.sort((a, b)=>{
                                    if(a.like < b.like){
                                         return 1
                                    }
                                    if(a.like > b.like){
                                        return -1
                                    }
                                    return 0;
                                })
                                .map(item=> <TopAside item={item} key={item.id} />)
                            }
                        </ul>
                    </div>
                    
                    <div className="new__post-aside">
                        <div className="title-new">
                            <h4 className="txt-title__aside">Bài viết mới</h4>
                        </div>
                        <ul className="list-new">
                            {
                                post.sort((a, b)=>{
                                    if(a.time.year > b.time.year){
                                        return -1;
                                    }
                                    if(a.time.year < b.time.year){
                                        return 1;
                                    }
                                    else{
                                        if(a.time.month > b.time.month){
                                            return -1;
                                        }
                                        if(a.time.month < b.time.month){
                                            return 1;
                                        }
                                        else{
                                            if(a.time.day > b.time.day){
                                                return -1;
                                            }
                                            if(a.time.day < b.time.day){
                                                return 1;
                                            }
                                            else{
                                                if(a.time.hour > b.time.hour){
                                                    return -1;
                                                }
                                                if(a.time.hour < b.time.hour){
                                                    return 1;
                                                }
                                                else{
                                                    if(a.time.minute > b.time.minute){
                                                        return -1;
                                                    }
                                                    if(a.time.minute < b.time.minute){
                                                        return 1;
                                                    }
                                                    else{
                                                        if(a.time.second > b.time.second){
                                                            return -1;
                                                        }
                                                        if(a.time.second < b.time.second){
                                                            return 1;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    return 0;
                                }).map(item=><NewAside item={item} key={item.id} />)
                            }
                        </ul>
                    </div>
                </div>
            </aside>
        )
    }
}
