import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './component/page/home/Home';
import About from './component/page/about/About';
import LoginCreate from './component/page/loginCreate/LoginCreate';
import Contact from './component/page/contact/Contact';
import Tags from './component/page/tags/Tags';
import Videos from './component/page/videos/Videos';
import Images from './component/page/images/Images';
import CreatePost from './component/page/createPost/CreatePost';
import DetailPost from './component/page/details/DetailPost';
import ManageUser from './component/page/manage/ManageUser';
import Personal from './component/page/personal/Personal';
import Setting from './component/page/setting/Setting';
import CreateVideo from './component/page/createVideo/CreateVideo';
import DetailTag from './component/page/detailTag/DetailTag';
import Search from './component/page/search/Search';
// import Admin from './component/admin/Admin';

export default class RouterLink extends Component {
    render() {
        const {post, tagPost, tag, user, onFilterTime, filterTime, uiConfig, isSignedIn, onSubmitSignIn, 
            onSubmitRegister, onSubmitCreatePost, onClickLike, dataSetLike, onSubmitCmt, comment, onDelete,
            onEdit, newdata, photo, image} = this.props;
        return (
            <Switch>
                <Route exact path="/" component={()=><Home post={post} tag={tag} user={user} tagPost={tagPost}
                onFilterTime={onFilterTime} filterTime={filterTime} onClickLike={onClickLike} dataSetLike={dataSetLike}
                isSignedIn={isSignedIn} />}/>
                <Route path="/create-post" component={()=><CreatePost onSubmitCreatePost={onSubmitCreatePost} tag={tag} 
                photo={photo}/>}/>
                <Route path="/edit" component={()=><CreatePost onSubmitCreatePost={onSubmitCreatePost} tag={tag} 
                newdata={newdata} photo={photo} />}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/tags" component={()=><Tags tag={tag}/>}/>
                <Route path="/videos" component={()=><Videos post={post} user={user}/>}/>
                <Route path="/images" component={()=><Images image={image} user={user}/>}/>
                <Route path="/chi-tiet/:id/:slug" 
                component={(props)=><DetailPost post={post} tag={tag} user={user} tagPost={tagPost} dataSetLike={dataSetLike}
                isSignedIn={isSignedIn} onClickLike={onClickLike} onSubmitCmt={onSubmitCmt} comment={comment}
                 {...props}/>}/>
                <Route path="/manage-user" component={()=><ManageUser post={post} user={user} onDelete={onDelete} 
                onEdit={onEdit} />}/>
                <Route path="/profile/:id" component={(props)=><Personal post={post} tag={tag} user={user} tagPost={tagPost}
                onClickLike={onClickLike} dataSetLike={dataSetLike} isSignedIn={isSignedIn} {...props}/>}/>
                <Route path="/setting" component={(props)=><Setting user={user} {...props}/>} />
                <Route path="/create-video" component={CreateVideo} />
                <Route path="/chi-tiet-tag/:id/:slug" component={(props)=><DetailTag tag={tag} post={post} user={user} 
                tagPost={tagPost} isSignedIn={isSignedIn} dataSetLike={dataSetLike} onClickLike={this.props.onClickLike} {...props}/>} />
                <Route path="/search/:key" component={(props) => <Search tag={tag} post={post} user={user} tagPost={tagPost} 
                isSignedIn={isSignedIn} dataSetLike={dataSetLike} onClickLike={this.props.onClickLike} 
                {...props} />}/>
                {/* <Route path="/admin" component={Admin}/> */}
                {
                    !isSignedIn 
                    ?<Route path="/login-create" 
                    component={()=>
                    <LoginCreate uiConfig={uiConfig} 
                    onSubmitSignIn={onSubmitSignIn}
                    onSubmitRegister={onSubmitRegister}
                    />}/> 
                    : <Redirect to="/"/>
                }        
            </Switch>
        )
    }
}
