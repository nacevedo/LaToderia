import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import "./style.css";

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

  render() {
    return(
      <div> 
        <div> EL app </div> 
        <Ranking/>
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









