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
      <option key="1" >8:00</option>,
      <option key="2" >8:30</option>,
      <option key="3" >9:00</option>,
      <option key="4" >9:30</option>,
      <option key="5" >10:00</option>,
      <option key="6" >10:30</option>,
      <option key="7" >11:00</option>,
      <option key="8" >11:30</option>,
      <option key="9" >12:00</option>,
      <option key="10" >12:30</option>,
      <option key="11" >13:00</option>,
      <option key="12" >13:30</option>,
      <option key="13" >14:00</option>,
      <option key="14" >14:30</option>,
      <option key="15" >15:00</option>,
      <option key="16" >15:30</option>,
      <option key="17" >16:00</option>,
      <option key="18" >16:30</option>,
      <option key="19" >17:00</option>,
      <option key="20" >17:30</option>,
      <option key="21" >18:00</option>,
      <option key="22" >18:30</option>,
      <option key="23" >19:00</option>,
      <option key="24" >19:30</option>,
      <option key="25" >20:00</option>,
      <option key="26" >20:30</option> 

      ]

      return res;    
  }


  renderTecnicians()
  {
    let res=[];
    let tec = this.props.posts;
    for (let i in tec) {

        if(tec[i].areas.includes(this.state.selectValueArea) && tec[i].services.includes(this.state.selectValueServicio) ){
          res.push(
          <option key={i} value={tec[i]._id}> {tec[i].name}</option>
            );
        }
      
      
    }
    return res;
  }

  handleChangeTecnician(e){
    this.setState({selectValueTecnician:e.target.value});
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
      <select className="custom-select" onChange={this.handleChangeArea.bind(this)} >
      <option value="">Seleccione un Área de Trabajo</option>
      {this.state.areas.map((p,i) =>  <option key={i} value={p}> {p}</option>)}
      </select>
      </div>
      
      <div>
      <select className="custom-select" onChange={this.handleChangeServicio.bind(this)} >
      <option value="">Seleccione un Servicio</option>
      {this.renderWorks()}
      </select>
      </div>

      <div>
       <select className="custom-select" onChange={this.handleChangeHour.bind(this)} >
      <option value="">Seleccione un Horario</option>
      {this.renderHours()}
      </select>
      </div>

      <div>
      <select className="custom-select" onChange={this.handleChangeTecnician.bind(this)} >
      <option value="">Seleccione un Técnico</option>
      {this.renderTecnicians()}
      </select>
      </div>      


      <div>
      <input className="inn" type="date" name="diaServicio" min = {this.currentDate()} onChange={this.handleChangeDate.bind(this)} />
      </div>
      <div>
      <input className="com-text" role="textbox" type="text" placeholder="Comentarios" aria-label="Comentarios" ref="text"/>
      </div>
      <button className="button2"

      onClick={
        () => 
        {
          this.props.onAddService(this.state.selectValueArea, this.state.selectValueServicio, this.state.selectValueDate, this.state.selectValueTecnician, this.state.selectValueHour, this.refs.text.value);
          this.clearContents(this);
          Bert.alert( '¡El servicio ha sido reservado con éxito!', 'success', 'growl-top-right', 'fa-check' );
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