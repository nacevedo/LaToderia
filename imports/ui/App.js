import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import "./style.css";
import "./fonts.css";
import 'react-notifications/lib/notifications.css';

import { Posts } from "../api/posts";
import AccountsUIWrapper from './AccountsUIWrapper.js';

import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Post from "./Post";
import PostAlone from "./PostAlone";
import ChatList from "./ChatList";
import ChatAlone from "./ChatAlone";
import Ranking from "./Ranking";
import PostAdd from "./PostAdd";
import NavBar from "./NavBar";
import AreasTrabajo from "./AreasTrabajo";
import Why from "./Why";
import About from "./About";
import SolicitarServicio from "./SolicitarServicio";



export class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      city: "City",
      postName: "",
      postID: "",
      chatID:"",
      user1:"",
      user2:"",
      search: null
    };
  }


  onChangeCity(newCity){
    
    this.setState({
      city: newCity
    });
  }

  onChangePost(newName){
    
    this.setState({
      postName: newName
    });
  }

  onChangePostID(id){
    
    this.setState({
      postID: id
    });

  }

  onChangeChatID(id){
    
    this.setState({
      chatID: id
    });

  }

  onChangeUser1(id){
    
    this.setState({
      user1: id
    });

  }

  onChangeUser2(id){
    this.setState({
      user2: id
    });

  }

  filter(text){
    this.setState({
      search: text
    }); 

  }

  onAdd(name, text) {

    // User exists ?? 
    /**
  if (typeof text !== 'string' || typeof title !== 'string' )
    {
      window.alert ("Write only text please!"); 
      return; 
    }

    if (Meteor.userId() === null) 
    {
      window.alert ("You are not registered! Please sign in."); 
      return; 
    }
    **/
    if(name == "" || text == "")
    {
      window.alert("No ha ingresado un campo"); 
      return ;
    }

    Meteor.call('posts.insert', name, text, (err, res) => {if (err) alert(err.error)}); 

  }

  render() {
    return(
      <div> 
        <div id="header-wrapper">
          <div id="header" className="container">
            <div id="logo">
              <h1 id="titulo"><a href="#"><span id="la"> LA </span>TODERÍA</a></h1>
              
            </div>
            <div id="social">
              <ul className="contact">
                <li><a href="#" className="icon icon-twitter"><span>Twitter</span></a></li>
                <li><a href="#" className="icon icon-facebook"><span></span></a></li>
                <li><a href="#" className="icon icon-google-plus"><span>Google+</span></a></li>
                <li><a href="tel:3103292521" className="icon icon-phone"><span>3103292521</span></a></li> 
                <li><a href="mailto:bergut19@hotmail.com" className="icon icon-envelope"><span>bergut19@hotmail.com</span></a></li> 
              </ul>
            </div>
          </div>
          
           <NavBar />
          
        </div>

        <div id="page" className="container">
          <h3> Hay {this.props.posts.length} técnicos </h3>
          <Ranking posts = {this.props.posts} />
          <PostAdd onAdd = {this.onAdd.bind(this)}/> 
        <Why/>
        <About/>
        <SolicitarServicio/>
        </div>

       

        <div id="footer">
          <p>&copy; Untitled. All rights reserved. Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a></p>
        </div>

      </div> 
      ); 
  
  
 }
}

App.propTypes = {
  posts: PropTypes.array.isRequired
};


export default withTracker(
  () => {
    Meteor.subscribe("posts");
    return {
      posts: Posts.find({}, {sort: {voteCount:-1}}).fetch()
     
    };
  }
)(App);









