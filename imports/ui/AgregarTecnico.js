import React, { Component } from "react";
import PropTypes from "prop-types";
import servicios from "./areas.json";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Bert } from 'meteor/themeteorchef:bert';




export default class AgregarTecnico extends Component {
  constructor(props) {
    super(props);

    this.state={
      areas: ["Eléctrico",

      "Plomería",

      "Vidrios",

      "Carpintería",

      "Servicios Varios",

      "Resanes"], 
      checkArea: []
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
      let ind = this.state.checkArea.indexOf(servicios[i].tipo);
      if(servicios[i].tipo == this.state.checkArea[ind]){
        res.push(
          <div key = {i}>
      
        <div className="col-sm-3">
        
        <div className="row">
        <div className="col-sm-6">
        <p> {servicios[i].servicio} </p>
        </div>
        <div className="col-sm-6">
        <input type = "checkbox" onChange = { () =>{
          console.log(servicios[i].tipo); 
          res = this.state.checkArea;
          if(res.includes(servicios[i].servicio)){
            const index = res.indexOf(servicios[i].servicio);
            res.splice(index, 1);
          }
          else{
            res.push(servicios[i].servicio);
          }
          console.log(res);
          this.setState({
            checkArea : res
          });
          console.log(res); 
        } } />

        </div>
        </div>
      </div>
    
   
    </div>
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


  renderCheckArea(){
    let res=[];

    return this.state.areas.map((p,i) =>
      <div key = {i}>
      <div className="col-sm-2">
      <div className="row">
      <div className="col-sm-6">
      <p> {p} </p>
      </div>
      <div className="col-sm-6">
      <input type = "checkbox" onChange = { () =>{
        console.log(p); 
        res = this.state.checkArea;
        if(res.includes(p)){
          const index = res.indexOf(p);
          res.splice(index, 1);
        }
        else{
          res.push(p);
        }
        console.log(res);
        this.setState({
          checkArea : res
        });
        console.log(res); 
      } } />

      </div>
      </div>
      </div>
      </div>

      );
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
      <div id="agregar-tecnico" className="container contenido">

      <h2>Agregar un Técnico</h2>
      <div>
      {this.renderCheckArea()}
      
      </div>
      
      <div className="row">
      
      {this.renderWorks()}
      
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
      >Agregar Técnico
      </button>
      </div>
      );
  }
}

AgregarTecnico.propTypes = {

};