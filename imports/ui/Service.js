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
    	<h5>{this.props.service.who}</h5>
      <p> Área: {this.props.service.area} </p>
      </div>
    );
  }
}


