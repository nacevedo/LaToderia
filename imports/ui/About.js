import React, { Component } from "react";
import { Meteor } from 'meteor/meteor';
import PropTypes from "prop-types";
import { Comments } from "../api/comments";
import { withTracker } from "meteor/react-meteor-data";
import {Route, NavLink, HashRouter} from "react-router-dom";



class About extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      about: "LA TODERÍA es una empresa creada para satisfacer las  necesidades de multitareas  en instalación," + 
      "reparación y mantenimiento en áreas  eléctrica, de plomería, carpintería, albañilería y pintura, ventanas, "+
      "vidrios y servicios varios que puedan ser requeridas en hogares y empresas.  Se ofrece un servicio integral "+
      "personalizado, sin tener que acudir a diferentes técnicos para cada una de las tareas que se requieran. "+
      "Todos los colaboradores de LA TODERÍA son profesionales de gran experiencia en su oficio y de toda la confianza "+
      "y responsabilidad que esperan los clientes. LA TODERÍA operará a modo digital mediante una aplicación móvil y "+
      "página web que permitirá  en tiempo real, calificar el servicio, y además por medio de la misma aplicación "+
      "se podrán agendar los horarios en los que se desee el servicio. Para la seguridad y tranquilidad de nuestros "+
      "clientes todo nuestro personal se encuentra debidamente uniformado e identificado y  cuenta con una red de "+
      "proveedores de insumos y repuestos a fin de obtener materiales de primera calidad y precios competitivos."
    };

  }

  

  render() {
    return (
      <div id="about" className="container contenido">
           <h2>Acerca de La Todería</h2>
      <h4>{this.state.about}</h4>
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
  )(About);

