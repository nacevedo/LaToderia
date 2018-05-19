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

import AreasTrabajo from "./AreasTrabajo";
import Why from "./Why";
import About from "./About";
import SolicitarServicio from "./SolicitarServicio";
import AgregarTecnico from "./AgregarTecnico";
import TweetList from "./TweetList";

import { Bert } from 'meteor/themeteorchef:bert';




export class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      
      postName: "",
      search: null
    };
  }


 

  onAddService(area, service, date, tecnician, hour, comment) {
    
    if (Meteor.userId() === null) 
    {
       
      Bert.alert( '¡No está registrado, por favor inicie sesión!', 'danger', 'growl-top-right', 'fa-remove' );
      return; 
    }
    if(area == undefined || service == undefined || date == undefined || tecnician == undefined|| hour == undefined || comment == undefined){
        Bert.alert( '¡No ha seleccionado un campo!', 'warning', 'growl-top-right', 'fa-warning' );
    }
    else{
       Meteor.call('comments.insert', area, service, date, tecnician, hour,comment, (err, res) => {if (err) Bert.alert( '¡No se pudo agregar al técnico!', 'danger', 'growl-top-right', 'fa-cross' )}); 
       Bert.alert( '¡El servicio ha sido reservado con éxito!', 'success', 'growl-top-right', 'fa-check' );
    }
    

  }

  onAdd(name,text, areas, services) {

    console.log(areas);

    if (Meteor.userId() === null) 
    {
       
      Bert.alert( '¡No está registrado, por favor inicie sesión!', 'danger', 'growl-top-right', 'fa-remove' );
    }
    if(name == "" || text == undefined || areas.length == 0 || services.length == 0){
        Bert.alert( '¡No ha llenado un campo!', 'warning', 'growl-top-right', 'fa-warning' );
    }
    else{
       Meteor.call('posts.insert', name, text, areas, services, (err, res) => {if (err) Bert.alert( '¡No se pudo agregar al técnico!', 'danger', 'growl-top-right', 'fa-cross' )});
       Bert.alert( '¡El técnico ha sido agregado con éxito!', 'success', 'growl-top-right', 'fa-check' );
    }


    

  }

  onVote(post, emoji) {


    if (Meteor.userId() === null) 
    {
       
      Bert.alert( '¡No está registrado, por favor inicie sesión!', 'danger', 'growl-top-right', 'fa-remove' );
      return; 
    }
   
    if(post == undefined || emoji == undefined){
        Bert.alert( '¡No ha seleccionado un campo!', 'warning', 'growl-top-right', 'fa-warning' );
    }
    else{
      Meteor.call('posts.vote', post, emoji, (err, res) => {if (err) alert(err.error)}); 
      Bert.alert( '¡Gracias por calificar a nuestro técnico!', 'success', 'growl-top-right', 'fa-check' );
    }
   
    
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









