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
      <h4> un Serviciiooooooo {this.props.service.area} </h4>
      </div>
    );
  }
}


