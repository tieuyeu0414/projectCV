import React, { Component } from 'react';
import HeaderSection from './headerSection/HeaderSection';
import ArticleSection from './articleSection/ArticleSection';
import './Section.css';
import Loading from '../../page/loading/Loading';

export default class Section extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: null
        }
    }
    componentDidMount(){
        // const {desc, photo, date, userId, dataPost} = this.state
        
        setTimeout(()=>{
            const post = this.props.post;
            this.setState({
                loading:post,
            })
        }, 2000)
            
        }
    render() {
        let {post, tag, user, onFilterTime, filterTime, tagPost, onClickLike, dataSetLike, isSignedIn} = this.props;
        const {loading} = this.state;
        const time = new Date();
        const date = time.getDate();
        const month = time.getMonth() + 1;
        const year = time.getFullYear();
        const day = time.getDay();
        const filterDate1 = date - (day - 0);
        const filterDate2 = date - (day - 1);
        const filterDate3 = date - (day - 2);
        const filterDate4 = date - (day - 3);
        const filterDate5 = date - (day - 4);
        const filterDate6 = date - (day - 5);
        const filterDate7 = date - (day - 6);
        post = post.filter(item=>{
            if(filterTime === 'all'){
                return item;
            }
            else if(filterTime === 'day'){   
                return (item.time.day === filterDate1 || item.time.day === filterDate2 || item.time.day === filterDate3 || item.time.day === filterDate4 || item.time.day === filterDate5 || item.time.day === filterDate6 || item.time.day === filterDate7) && item.time.month === month && item.time.year === year 

            }
            else if(filterTime === 'date'){
                return item.time.day === date;
            }
            else if(filterTime === 'month'){
                return item.time.month === month;
            }
            else if(filterTime === 'year'){
                return item.time.year === year;
            }
            return item
        })
        return (
            <section>
                <div id="section">
                    <HeaderSection onFilterTime={onFilterTime}/>
                    {
                        loading && (
                            post.map((itemPost, index)=>{
                                return !itemPost.video ?
                                <ArticleSection item={itemPost} key={index} tag={tag} user={user} tagPost={tagPost}
                                    onClickLike={onClickLike} dataSetLike={dataSetLike} isSignedIn={isSignedIn} />
                                : false
    
                            })
                        )
                    }
                    {!loading && <Loading/>}
                </div>
            </section>
        )
    }
}
