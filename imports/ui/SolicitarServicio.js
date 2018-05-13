import React, { Component } from "react";
import PropTypes from "prop-types";
import servicios from "./areas.json";

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

      
      <div>
      <textarea className="com-text" role="textbox" type="text" placeholder="Comentarios" aria-label="Comentarios" ref="text"/>
      </div>
      <button className="my-btn-2"

      onClick={
        () => 
        {
          this.props.onAdd(this.refs.title.value, this.refs.text.value);
          this.clearContents(this);
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