import React, { Component } from "react";
import PropTypes from "prop-types";
import {Route, NavLink, HashRouter} from "react-router-dom";

import { Chats } from "../api/chats";


export default class Tecnico extends Component {
  constructor(props) {
    super(props); 

  }

  renderAreas(){
  	return this.props.tecnico.areas.map((p,i) =>
      
    	 <p key = {i}> {p} </p>
    	);
  }

  renderServices(){
  	return this.props.tecnico.services.map((p,i) =>
      
    	<p key = {i}> {p}</p>);
  }

  render() {
    return (
    	<div className="panel-body">
      <h5>  {this.props.tecnico.name} </h5>
      <p> Calificación promedio: {this.props.tecnico.cal} </p>

      <h6> Áreas </h6>
      {this.renderAreas()}
      <h6> Servicios </h6>
      {this.renderServices()}
    </div>
    );
  }
}


