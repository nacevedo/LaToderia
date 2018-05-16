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

      "Resanes"], 
    };
  }
  
  clearContents(element) {
    this.refs.title.value = '';
    this.refs.text.value = ''; 
  }

  handleChangeArea(e){
    this.setState({selectValueArea:e.target.value});
  }

  handleChangeServicio(e){
    this.setState({selectValueServicio:e.target.value});
  }

  handleChangeDate(e){
    this.setState({selectValueDate: new Date (e.target.value)});
  }

  handleChangeTecnician(e){
    this.setState({selectValueTecnician:e.target.value});
  }

  handleChangeHour(e){
    this.setState({selectValueHour: e.target.value});
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
      <option>Gerardo</option>,
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
    
    return respuesta; 
  }

  render() {
    return (
      <div id="solicitar-servicio" className="container contenido">

      <h2>Solicitar Servicio</h2>
      <div>
      <select className="route-selection" onChange={this.handleChangeArea.bind(this)} >
      <option value="">Seleccione un Área de Trabajo</option>
      {this.state.areas.map((p,i) =>  <option key={i} value={p}> {p}</option>)}
      </select>
      </div>
      
      <div>
      <select className="route-selection" onChange={this.handleChangeServicio.bind(this)} >
      <option value="">Seleccione un Servicio</option>
      {this.renderWorks()}
      </select>
      </div>

      <div>
       <select className="route-selection" onChange={this.handleChangeHour.bind(this)} >
      <option value="">Seleccione un Horario</option>
      {this.renderHours()}
      </select>
      </div>

      <div>
      <select className="route-selection" onChange={this.handleChangeTecnician.bind(this)} >
      <option value="">Seleccione un Técnico</option>
      {this.renderTecnicians()}
      </select>
      </div>
      

      <div>
      <input className="inn" type="date" name="diaServicio" min = {this.currentDate()} onChange={this.handleChangeDate.bind(this)} />
      </div>
      <div>
      <textarea className="com-text" role="textbox" type="text" placeholder="Comentarios" aria-label="Comentarios" ref="text"/>
      </div>
      <button className="button2"

      onClick={
        () => 
        {
          this.props.onAdd(this.refs.title.value, this.refs.text.value);
          this.clearContents(this);
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