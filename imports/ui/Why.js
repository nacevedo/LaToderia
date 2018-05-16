import React, { Component } from "react";
import { Meteor } from 'meteor/meteor';
import PropTypes from "prop-types";
import { Comments } from "../api/comments";
import { withTracker } from "meteor/react-meteor-data";
import {Route, NavLink, HashRouter} from "react-router-dom";



class Why extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      lista:["Dedicación y profesionalismo en la ejecución de las tareas",
      "Cuidado y conocimiento en la solución de problemas",
      "Puntualidad en las visitas",
      "Confiabilidad",
      "Cumplimiento y garantía de los trabajos realizados",
      ]
    };

  }

  renderWhy()
  {
    let res=[];
    
    for (let i in this.state.lista) {
      
      res.push(
        <h4 className="whyL"
        
          key={i}>{this.state.lista[i]}</h4>
          );
    }
    return res;
  }

  render() {
    return (
      <div id="why" className="container contenido">
           <h2>¿Por qué La Todería?</h2>
      {this.renderWhy()}
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
  )(Why);

