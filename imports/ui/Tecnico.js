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
      <h4>  {this.props.tecnico.name} </h4>
      <p> Calificación promedio: {this.props.tecnico.cal} </p>

      <h5> Áreas </h5>
      {this.renderAreas()}
      <h5> Servicios </h5>
      {this.renderServices()}
    </div>
    );
  }
}


