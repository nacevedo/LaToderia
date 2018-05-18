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
      checkArea: [],
      checkService: []
    };
  }
  
  clearContents(element) {
  
    this.refs.text.value = ''; 
  }


  renderWorks()
  {
    let res=[];
    
    for (let i in servicios) {
      let ind = this.state.checkArea.indexOf(servicios[i].tipo);
      if(servicios[i].tipo == this.state.checkArea[ind]){
        res.push(
          <div key = {i} className="col-sm-2">
      
     
        
        <div className="row">
        <div className="col-sm-8">
        <p> {servicios[i].servicio} </p>
        </div>
        <div className="col-sm-4">
        <input type = "checkbox" onChange = { () =>{
          
          res = this.state.checkService;
          if(res.includes(servicios[i].servicio)){
            const index = res.indexOf(servicios[i].servicio);
            res.splice(index, 1);
          }
          else{
            res.push(servicios[i].servicio);
          }
          
          this.setState({
            checkService : res
          });
         
        } } />

        </div>
        </div>
   
    
   
    </div>
          );
      }
      
    }
    return res;

    
  }

  

  renderCheckArea(){
    let res=[];

    return this.state.areas.map((p,i) =>
      <div key = {i} className="col-sm-2">
    
      <div className="row cuadro">
      <div className="col-sm-8">
      <p> {p} </p>
      </div>
      <div className="col-sm-4">
      <input type = "checkbox" onChange = { () =>{
        
        res = this.state.checkArea;
        if(res.includes(p)){
          const index = res.indexOf(p);
          res.splice(index, 1);
        }
        else{
          res.push(p);
        }
       
        this.setState({
          checkArea : res
        });
        
      } } />

      </div>
      </div>
      </div>
    

      );
  }


  

  render() {
    return (
      <div id="agregar-tecnico" className="container contenido">

      <h2>Agregar un Técnico</h2>
      <div>
      <h4>Nombre del técnico</h4>
      <input className="com-text" role="textbox" type="text" placeholder="Nombre" aria-label="Nombre" ref="text"/>
      </div>

      <h4>¿Qué áreas de trabajo maneja el técnico?</h4>
      <div className="row">
      {this.renderCheckArea()}
      
      </div>
      <div >
      <h4>¿Qué servicios presta el técnico?</h4>
      </div>
      <div className="row">
      
      {this.renderWorks()}
      
      </div>

      <div>
      
      <button className="button2"

      onClick={
        () => 
        {
          this.props.onAdd(this.refs.text.value, 0, this.state.checkArea, this.state.checkService);
          this.clearContents(this);
          Bert.alert( '¡El técnico ha sido agregado con éxito!', 'success', 'growl-top-right', 'fa-check' );
        }
      }
      >Agregar Técnico
      </button>
      </div>
      </div>
      );
  }
}

AgregarTecnico.propTypes = {

};