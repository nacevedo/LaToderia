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

  renderWorks()
  {
    let res=[];
    
    for (let i in areas) {
      
      res.push(
        <p className="work"
        
          key={i}>{areas[i].servicio}</p>
          );
    }
    return res;
  }

  render() {
    return (
      <div id="areas-trabajo" className="container contenido">
           
      {this.renderWorks()}
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
