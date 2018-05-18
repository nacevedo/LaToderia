import React, { Component } from "react";
import PropTypes from "prop-types";
import {Route, NavLink, HashRouter} from "react-router-dom";

import { Chats } from "../api/chats";


export default class Comment extends Component {
  constructor(props) {
    super(props); 

  }



  render() {
    return (
    <div>
      <p> {this.props.tweet.author}</p>
      <img src ={this.props.tweet.avatar}/>
      <p> {this.props.tweet.body}</p>
    </div> 
    );
  }
}


