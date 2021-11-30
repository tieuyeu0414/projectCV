import React, { Component } from 'react'
import Header from './component/layout/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
// import './index.css';
import Footer from './component/layout/footer/Footer';
import RouterLink from './RouterLink';
import firebase from "firebase";
import ScrollTop from './ScrollTop';
// import styled, { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";

// const StyledApp = styled.div`
//   color: ${(props) => props.theme.fontColor};
// `;

const firebaseConfig = {
  apiKey: "AIzaSyCYUM6mhmTSFrkstTmi9xgGkG76GJODX9o",
  authDomain: "projectcv-f85e2.firebaseapp.com",
  databaseURL: "https://projectcv-f85e2-default-rtdb.firebaseio.com",
  projectId: "projectcv-f85e2",
  storageBucket: "projectcv-f85e2.appspot.com",
  messagingSenderId: "53960947962",
  appId: "1:53960947962:web:52abe838ad01b64adff143",
  measurementId: "G-QLQ86H4ZYP"
};
firebase.initializeApp(firebaseConfig);

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: [],
      tag: [],
      user: [],
      tagPost: [],
      filterTime: '',
      isSignedIn: null,
      email: '',
      password: '',
      nickname: '',
      phone: '',
      isLoginData: false,
      image: [],
      dataSetLike: [],
      continuePost: false,
      comment: [],
      newdata: null,
      photo: '',
      // theme: 'light'
    }
  }
  // themeToggler = () => {
  //   this.setState({
  //     theme: this.state.theme === 'light' ? 'dark' : 'light'
  //   })
  // };
  componentDidMount(){
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user
      })
      var pushDataRef = firebase.database().ref("user");
      pushDataRef.on('value', (res)=>{
        const data = res.val();
        let userList = []
        for(let id in data){
          userList.push(
            data[id].uid,
          )
        }
        if(user){
          if(userList.indexOf(user.uid) === -1){
            const {phone, nickname, password, isLoginData} = this.state;
            firebase.database().ref('user').push({
              name: isLoginData === true ? nickname : firebase.auth().currentUser.displayName,
              email: firebase.auth().currentUser.email,
              password: isLoginData === true ? password : '',
              phone: isLoginData === true ? phone : '',
              photo: isLoginData === true ? 'https://sefamedia.vn/assets/images/default-user.jpg' : firebase.auth().currentUser.photoURL,
              uid: firebase.auth().currentUser.uid,
              coverImg: 'http://www.uplevo.com/img/designbox/anh-bia-facebook-dep-troi-sao.jpg',
              nickname: '',
              favorite: '',
              work: '',
              workplace: '',
              address: ''
            })
            this.setState({
              isLoginData: false
            })
          }
          else{
            return false
          }
        }
      });
    });
    const firebaseStore = firebase.database().ref('post');
    firebaseStore.on('value', (res)=>{
      const data = res.val();
      let posts = [];
      for(let id in data){
        posts.push({
          id: id,
          title: data[id].title,
          photoTitle: data[id].photoTitle,
          time: data[id].time,
          idUser: data[id].idUser,
          like:data[id].like,
          comment: data[id].comment,
          content: data[id].content,
          video: data[id].video
        })
      }
      this.setState({
        post: posts
      })
    })
    const firebaseStoreTagPost = firebase.database().ref('tagPost');
    firebaseStoreTagPost.on('value', (res)=>{
      const data = res.val();
      let tagPosts = [];
      for(let id in data){
        tagPosts.push({
          id: id,
          idPost: data[id].idPost,
          idTag: data[id].idTag
        })
      }
      this.setState({
        tagPost: tagPosts
      })
    })
    const firebaseTag = firebase.database().ref('tag');
    firebaseTag.on('value', (res)=>{
      const data = res.val();
      let tags = [];
      for(let id in data){
        tags.push({
          id: id,
          name: data[id].name,
          content: data[id].content
        })
      }
      this.setState({
        tag: tags
      })
    })
    const firebaseUser = firebase.database().ref('user');
    firebaseUser.on('value', (res)=>{
      const data = res.val();
      let users = [];
      for(let id in data){
        users.push({
          id: id,
          name: data[id].name,
          email: data[id].email,
          password: data[id].password,
          phone: data[id].phone,
          photo: data[id].photo,
          uid: data[id].uid,
          coverImg: data[id].coverImg,
          nickname: data[id].nickname,
          favorite: data[id].favorite,
          work: data[id].work,
          workplace: data[id].workplace,
          address: data[id].address
        })
      }
      this.setState({
        user: users
      })
    })
    const firebaseDataSetLike = firebase.database().ref('setLike');
    firebaseDataSetLike.on('value', (res)=>{
      const data = res.val();
      let dataSetLikes = [];
      for(let id in data){
        dataSetLikes.push({
          id: id,
          idPost: data[id].idPost,
          idUser: data[id].idUser,
          isLike: data[id].isLike,
          classLike: data[id].classLike
        })
      }
      this.setState({
        dataSetLike: dataSetLikes
      })
    })
    const firebaseImages = firebase.database().ref('images');
    firebaseImages.on('value', (res)=>{
      const data = res.val();
      let images = [];
      for(let id in data){
        images.push({
          id: id,
          idUser: data[id].idUser,
          location: data[id].location,
          photo: data[id].photo,
          name: data[id].name
        })
      }
      this.setState({
        image: images
      })
    })
    const firebaseComment = firebase.database().ref('comment');
    firebaseComment.on('value', (res)=>{
      const data = res.val();
      let comments = [];
      for(let id in data){
        comments.push({
          id: id,
          idPost: data[id].idPost,
          idUser: data[id].idUser,
          location: data[id].location,
          photo: data[id].photo,
          content: data[id].content,
          time: data[id].time
        })
      }
      this.setState({
        comment: comments
      })
    })
    return () => unregisterAuthObserver();
  }
  componentWillUnmount(){
    this.unregisterAuthObserver();
  }
  onFilterTime = (key) =>{
    this.setState({
      filterTime: key
    })
  }
  
  onSubmitRegister = (nickname, phone, email, password, repassword) =>{

    if(password === repassword){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function() {
        alert('Tài khoản hoặc biệt danh đã tồn tại');
      });
      this.setState({
        email: email,
        phone: phone,
        password: password,
        nickname: nickname,
        isLoginData: true
      })
    }
    else{
      alert('Nhập lại mật khẩu không khớp');
    }
  }
  onSubmitSignIn = (email, password) =>{

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      alert('Sai mật khẩu hoặc tài khoản');
    });
  }
  onSubmitCreatePost = (contentPost, titlePost, url, check, id, name) =>{
        const dataTime = new Date();
        const date = dataTime.getDate();
        const month = dataTime.getMonth() + 1;
        const year = dataTime.getFullYear();
        const hour = dataTime.getHours();
        const minute = dataTime.getMinutes();
        const second = dataTime.getSeconds();
        if(id === ''){
            firebase.database().ref('post').push({
                title: titlePost,
                photoTitle: url,
                video: '',
                time: {hour: hour, minute: minute, second: second, day: date, month: month, year: year},
                like: 0,
                comment: 0,
                idUser: firebase.auth().currentUser.uid,
                content: contentPost
            })
            const firebaseStore1 = firebase.database().ref('post');
            let posts = [];
            firebaseStore1.on('value', (res)=>{
                const data = res.val();
                for(let id in data){
                    posts.push({
                        id: id,
                    })
                }   
            })
            this.onAbc(url, posts, check, name);
        }
       else{
        firebase.database().ref('post').child(id).update({
            title: titlePost,
            photoTitle: url,
            time: {hour: hour, minute: minute, second: second, day: date, month: month, year: year},
            content: contentPost
          })
       }
        
      
  }
  onAbc = (nameImage, posts, check, name) =>{
    const postFilter = posts.length - 1;
    const lastPost = posts[postFilter];
    for(let i = 0 ; i < check.length; i++){
      if(firebase.database().ref('tagPost').push()){  
        firebase.database().ref('tagPost').push({
          idPost: lastPost.id,
          idTag: check[i]
        })
      }
    }
    var noname = this.state.image.filter(item=>item.name===name && item.idUser === firebase.auth().currentUser.uid ? item: 0);
    const locationImage = this.state.image.length - 1;
    const lastLocation = this.state.image[locationImage];
    if(nameImage !== ''){
      if(this.state.image.indexOf(...noname) === -1){
        if(lastLocation === undefined){
          firebase.database().ref('images').push({
            photo: nameImage,
            idUser: firebase.auth().currentUser.uid,
            location: 1,
            name: name
          });
        }
        else{
          if(lastLocation.location === 1){
            firebase.database().ref('images').push({
              photo: nameImage,
              idUser: firebase.auth().currentUser.uid,
              location: 2,
              name: name
            });
          }
          else if(lastLocation.location === 2){
            firebase.database().ref('images').push({
              photo: nameImage,
              idUser: firebase.auth().currentUser.uid,
              location: 3,
              name: name
            });
          }
          else if(lastLocation.location === 3){
            firebase.database().ref('images').push({
              photo: nameImage,
              idUser: firebase.auth().currentUser.uid,
              location: 1
            });
          }
        }
      }
      else{
        return false
      } 
    }
  }
  onClickLike = (post)=>{
    const {dataSetLike} = this.state;  
    if(this.state.isSignedIn === true){
      var anv = dataSetLike.filter(item=>item.idPost===post.id && item.idUser === firebase.auth().currentUser.uid? item: 0);
      if(dataSetLike.indexOf(...anv) === -1){
        firebase.database().ref('setLike').push({
          idPost: post.id,
          idUser: firebase.auth().currentUser.uid,
          isLike: true,
          classLike: 'red'
        })
        firebase.database().ref('post').child(post.id).update({
            like: post.like + 1,
        })
      }
      dataSetLike.map((item)=>{
          if(item.idPost === post.id && item.idUser === firebase.auth().currentUser.uid){
              if(item.isLike === false){
                  firebase.database().ref('setLike').child(item.id).update({
                      isLike: true,
                      classLike: 'red'
                  })
                  firebase.database().ref('post').child(post.id).update({
                      like: post.like + 1,
                  })
              }
              else{
                  firebase.database().ref('setLike').child(item.id).update({
                      isLike: false,
                       classLike: 'unset'
                  })
                  firebase.database().ref('post').child(post.id).update({
                       like: post.like - 1,
                  })
              }
          }
          return 0
      })
    } 
    else{
      if(window.confirm('Bạn phải đăng nhập để tiếp tục')){
        this.setState({
          continuePost: true
        })
        setTimeout(() => {
            this.setState({
              continuePost:false,
            })
        }, 1)
      }
    }
  }
  onSubmitCmt = (contentCmt, fileCmt, item) =>{
    const dataTime = new Date();
    const date = dataTime.getDate();
    const month = dataTime.getMonth() + 1;
    const year = dataTime.getFullYear();
    const hour = dataTime.getHours();
    const minute = dataTime.getMinutes();
    const second = dataTime.getSeconds();
    firebase.database().ref('comment').push({
      photo: fileCmt,
      time: {hour: hour, minute: minute, second: second, day: date, month: month, year: year},
      idPost: item.id,
      idUser: firebase.auth().currentUser.uid,
      content: contentCmt
    })
    firebase.database().ref('post').child(item.id).update({
      comment:  item.comment + 1
    })
  }
  onDelete = (item) =>{
    firebase.database().ref('post').child(item.id).remove();
    this.state.dataSetLike.map(itemLike=>itemLike.idPost === item.id ? firebase.database().ref('setLike').child(itemLike.id).remove() : false)
    this.state.comment.map(itemCmt=>itemCmt.idPost === item.id ? firebase.database().ref('comment').child(itemCmt.id).remove() : false)
    this.state.tagPost.map(itemtag=>itemtag.idPost === item.id ? firebase.database().ref('tagPost').child(itemtag.id).remove() : false)
  }

  onEdit = (index) =>{
    
    var {post} = this.state;
    var newdata = post[index];
        //các trường hợp sửa bài có ảnh, không ảnh
        if(post[index].photoTitle === "") {
            this.setState({
            newdata: newdata,
            photo:'',
            })
        } 
        else {
            this.setState({
            newdata: newdata,
            photo:post[index].photoTitle,
            })
        }
  }
  render() {
    const {post, tag, user, filterTime, isSignedIn, tagPost, dataSetLike, continuePost, comment, newdata, photo,
      isRedirect, image, dataVideo} = this.state;
    if(isRedirect === true){
      return <Redirect to="/manage-user"/>
    }
    return (
      // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      //   <GlobalStyles />
      //   <StyledApp>
        <Router>
          {continuePost ? <Redirect to="/login-create/login"/> : ''}
          <ScrollTop>
            <div className="bg-opacity"></div>
            <Header isSignedIn={isSignedIn} user={user}/>
            <RouterLink post={post} tag={tag} user={user} onFilterTime={this.onFilterTime} tagPost={tagPost}
              filterTime={filterTime} uiConfig={uiConfig} isSignedIn={isSignedIn} onSubmitSignIn={this.onSubmitSignIn}
              onSubmitRegister={this.onSubmitRegister} onSubmitCreatePost={this.onSubmitCreatePost} onClickLike={this.onClickLike}
              dataSetLike={dataSetLike} onSubmitCmt={this.onSubmitCmt} comment={comment} onDelete={this.onDelete} onEdit={this.onEdit}
              newdata={newdata} photo={photo} image={image} dataVideo={dataVideo}/>
            <Footer />
            
          </ScrollTop>
        </Router>
      //     {/* <button onClick={this.themeToggler}>Change Theme</button>
      //   </StyledApp>
      // </ThemeProvider> */}
      
    )
  }
}