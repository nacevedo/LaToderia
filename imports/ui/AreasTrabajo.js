import React, { Component } from "react";
import { Meteor } from 'meteor/meteor';
import PropTypes from "prop-types";
import { Comments } from "../api/comments";
import { withTracker } from "meteor/react-meteor-data";
import {Route, NavLink, HashRouter} from "react-router-dom";
import areas from "./areas.json";


class AreasTrabajo extends Component {
  constructor(props) {
    super(props);

    this.state = { 
    };

  }

  renderElectrico()
  {
    let res=[];
    
    for (let i in areas) {
      if(areas[i].tipo == "Eléctrico"){
        res.push(
        <li className="work"
        
          key={i}>{areas[i].servicio}</li>
          );
      }
      
    }
    return res;
  }

  renderResanes()
  {
    let res=[];
    
    for (let i in areas) {
      if(areas[i].tipo == "Resanes"){
        res.push(
        <li className="work"
        
          key={i}>{areas[i].servicio}</li>
          );
      }
      
    }
    return res;
  }

  renderPlomería()
  {
    let res=[];
    
    for (let i in areas) {
      if(areas[i].tipo == "Plomería"){
        res.push(
        <li className="work"
        
          key={i}>{areas[i].servicio}</li>
          );
      }
      
    }
    return res;
  }

  renderVidrios()
  {
    let res=[];
    
    for (let i in areas) {
      if(areas[i].tipo == "Vidrios"){
        res.push(
        <li className="work"
        
          key={i}>{areas[i].servicio}</li>
          );
      }
      
    }
    return res;
  }

  renderCarpintería()
  {
    let res=[];
    
    for (let i in areas) {
      if(areas[i].tipo == "Carpintería"){
        res.push(
        <li className="work"
        
          key={i}>{areas[i].servicio}</li>
          );
      }
      
    }
    return res;
  }

  renderServiciosVarios()
  {
    let res=[];
    
    for (let i in areas) {
      if(areas[i].tipo == "Servicios Varios"){
        res.push(
        <li className="work"
        
          key={i}>{areas[i].servicio}</li>
          );
      }
      
    }
    return res;
  }

  render() {
    return (
      <div id="areas-trabajo" className="container contenido">
          <div className="row"> 
          <div className="col-sm-2">
      <h4><i className="fas fa-toolbox"></i> Eléctrico</h4>
      <ul>
      {this.renderElectrico()}
      </ul>
      </div>
      <div className="col-sm-2">
      <h4><i className="fas fa-toolbox"></i> Plomería</h4>
      <ul>
      {this.renderPlomería()}
      </ul>
      </div>
<div className="col-sm-2">
      <h4><i className="fas fa-toolbox"></i> Vidrios</h4>
      <ul>
      {this.renderVidrios()}
      </ul>
      </div>
      <div className="col-sm-2">
      <h4><i className="fas fa-toolbox"></i> Carpintería</h4>
      <ul>
      {this.renderCarpintería()}
      </ul>
      </div>
      <div className="col-sm-2">
      <h4><i className="fas fa-toolbox"></i> Servicios Varios</h4>
      <ul>
      {this.renderServiciosVarios()}
      </ul>
      </div>

      <div className="col-sm-2">
      <h4><i className="fas fa-toolbox"></i> Resanes</h4>
      <ul>
      {this.renderResanes()}
      </ul>
      </div>
      </div>
      </div>
      );
  }
}




export default withTracker(
  (x) => {
    Meteor.subscribe("comments");
    return {
     
    };
  }
  )(AreasTrabajo);
