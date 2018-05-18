import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import "./style.css";
import 'react-notifications/lib/notifications.css';

import { Posts } from "../api/posts";
import AccountsUIWrapper from './AccountsUIWrapper.js';

import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import PostAlone from "./PostAlone";
import NavBar from "./NavBar";




export class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      
      postName: "",
      search: null
    };
  }


 

  onAddService(area, service, date, tecnician, hour, comment) {
    console.log("Area", area); 
    Meteor.call('comments.insert', area, service, date, tecnician, hour,comment, (err, res) => {if (err) Bert.alert( '¡No se pudo agregar al técnico!', 'danger', 'growl-top-right', 'fa-cross' )}); 

  }

  onAdd(name,text, areas, services) {

    Meteor.call('posts.insert', name, text, areas, services, (err, res) => {if (err) Bert.alert( '¡No se pudo agregar al técnico!', 'danger', 'growl-top-right', 'fa-cross' )});

  }

  onVote(post, emoji) {


    if (Meteor.userId() === null) 
    {
      window.alert ("You are not registered! Please sign in."); 
      return; 
    }
    
    Meteor.call('posts.vote', post, emoji, (err, res) => {if (err) alert(err.error)}); 
    
  }


  componentDidMount(){
    console.log("hola"); 
    Meteor.call('tweets.stream',(err, res) => {if (err) alert(err.error)});
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
                <li><a href="#" className="fab fa-twitter"><span>Twitter</span></a></li>
                <li><a href="#" className="fab fa-facebook-f"><span></span></a></li>
                <li><a href="#" className="fab fa-google-plus-g"><span>Google+</span></a></li>
                <li><a href="tel:3103292521" className="fas fa-phone"><span>3103292521</span></a></li> 
                <li><a href="mailto:bergut19@hotmail.com" className="far fa-envelope"><span>bergut19@hotmail.com</span></a></li> 
              </ul>
            </div>
          </div>
          

          <NavBar userID={Meteor.userId()} 
          onAddService = {this.onAddService.bind(this)} 
          posts = {this.props.posts} 
          onAdd = {this.onAdd.bind(this)}
          onVote = {this.onVote.bind(this)} 
          numTec={this.props.posts.length}/>
          
        </div>

        

       

        <div id="footer">
          <p>&copy;  All rights reserved.</p>
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
      user : Meteor.user(),
      posts: Posts.find({}, {sort: {voteCount:-1}}).fetch()
     
    };
  }
)(App);









