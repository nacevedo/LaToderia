import React, { Component } from "react";
import PropTypes from "prop-types";
import servicios from "./areas.json";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Bert } from 'meteor/themeteorchef:bert';




export default class SolicitarServicio extends Component {
  constructor(props) {
    super(props);

    this.state={
      areas: ["Eléctrico",

      "Plomería",

      "Vidrios",

      "Carpintería",

      "Servicios Varios",

      "Resanes"]
    };
  }
  clearContents(element) {
    this.refs.title.value = '';
    this.refs.text.value = ''; 
  }

  handleChangeArea(e){
    this.setState({selectValueArea:e.target.value});
    Session.set('route', e.target.value);
  }

  handleChangeServicio(e){
    this.setState({selectValueServicio:e.target.value});
    Session.set('route', e.target.value);
  }

  renderWorks()
  {
    let res=[];
    
    for (let i in servicios) {
      if(servicios[i].tipo == this.state.selectValueArea){
        res.push(
        <option key={i} value={servicios[i].servicio}> {servicios[i].servicio}</option>
          );
      }
      
    }
    return res;
  }

  renderHours()
  {
    res = [
      <option>8:00</option>,
      <option>9:00</option>,
      <option>10:00</option>,
      <option>11:00</option>,
      <option>12:00</option>,
      <option>13:00</option>,
      <option>14:00</option>,
      <option>15:00</option>,
      <option>16:00</option>,
      <option>17:00</option>,
      <option>18:00</option>,
      <option>19:00</option>,
      <option>20:00</option>,
      <option>8:30</option>,
      <option>9:30</option>,
      <option>10:30</option>,
      <option>11:30</option>,
      <option>12:30</option>,
      <option>13:30</option>,
      <option>14:30</option>,
      <option>15:30</option>,
      <option>16:30</option>,
      <option>17:30</option>,
      <option>18:30</option>,
      <option>19:30</option>,
      <option>20:30</option> ]

      return res; 

      
  }

  renderTecnicians()
  {
    res = [
      <option>Juan</option>,
      <option>Gerarldo</option>,
      <option>Pedro</option>,
      <option>Oscar</option>,
      <option>Shirley</option>
       ]

      return res; 

      
  }

  currentDate(){

    var respuesta;
    if(parseInt(new Date().getMonth() + 1 ) < 10){
    respuesta = new Date().getFullYear() + "-0" +  parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate();
  }
  else {
    respuesta = new Date().getFullYear() + "-" +  parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate();
  }
    console.log(respuesta); 
    return respuesta; 
  }

  render() {
    return (
      <div className="solicitar-servicio">

      <h2>Solicitar Servicio</h2>
      
      <select id="route-selection" onChange={this.handleChangeArea.bind(this)} >

      <option value="">Seleccione un Área de Trabajo</option>
      {this.state.areas.map((p,i) =>  <option key={i} value={p}> {p}</option>)}
      </select>
      
      <select id="route-selection" onChange={this.handleChangeServicio.bind(this)} >
      <option value="">Seleccione un Servicio</option>
      {this.renderWorks()}
      </select>

       <select id="hour-selection" onChange={this.handleChangeServicio.bind(this)} >
      <option value="">Seleccione la hora</option>
      {this.renderHours()}
      </select>

      <select id="tecnico-selection" onChange={this.handleChangeServicio.bind(this)} >
      <option value="">Seleccione el técnico</option>
      {this.renderTecnicians()}
      </select>
      
      <div>
      <textarea className="com-text" role="textbox" type="text" placeholder="Comentarios" aria-label="Comentarios" ref="text"/>
      </div>
      <input type="date" name="diaServicio" min = {this.currentDate()} />
      <button className="my-btn-2"

      onClick={
        () => 
        {
          //this.props.onAdd(this.refs.title.value, this.refs.text.value);
          //this.clearContents(this);
          console.log(NotificationManager); 
          Bert.alert( 'El servicio ha sido reservado con éxito!', 'success', 'growl-top-right', 'fa-check' );
        }
      }
      >Solicitar Servicio
      </button>
      </div>
      );
  }
}

SolicitarServicio.propTypes = {
  
};