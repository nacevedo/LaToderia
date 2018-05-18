import React, { Component } from "react";
import PropTypes from "prop-types";
import {Route, NavLink, HashRouter} from "react-router-dom";

import { Chats } from "../api/chats";


export default class Tecnico extends Component {
  constructor(props) {
    super(props); 

  }



  render() {
    return (
      <h4> Tecnicooo que tiene una calificación deee.. {this.props.tecnico.cal} </h4>
    );
  }
}


