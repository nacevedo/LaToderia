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
    <div className="panel-body">
    <div className="row">
      <div className="col-sm-4">
      <img src ={this.props.tweet.avatar}/>
      </div>
      <div className="col-sm-8">
      <h5> {this.props.tweet.author}</h5>
      </div>
      </div>
      <div>
      <p> {this.props.tweet.body}</p>
      </div>
    </div> 
    );
  }
}


