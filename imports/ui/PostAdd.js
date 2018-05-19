import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PostAdd extends Component {
  constructor(props) {
    super(props);

    this.state={
        oneToTen: [1,2,3,4,5,6,7,8,9,10]
    };
  }
  clearContents(element) {
    
    this.refs.text.value = ''; 
  }

  renderWorks()
  {
    let res=[];
    let tec = this.props.posts;
    for (let i in tec) {
      
        res.push(
        <option key={i} value={tec[i]._id}> {tec[i].name}</option>
          );
      
      
    }
    return res;
  }
  renderCal()
  {
    let res=[];
    let tec = this.state.oneToTen;
    for (let i in tec) {
      
        res.push(
        <option key={i} value={tec[i]}> {tec[i]}</option>
          );
      
      
    }
    return res;
  }

  handleChangeTecnician(e){
    this.setState({selectValueTecnician:e.target.value});
  }

  handleChangeCal(e){
    this.setState({selectValueCal:e.target.value});
  }

  render() {
    return (
      <div className="calificar">
      
      

      <h4>Seleccione el nombre del técnico al que quiere calificar y su califición </h4>
      
      <div>
      <select className="custom-select form-control" onChange={this.handleChangeTecnician.bind(this)} >
      <option value="">Seleccione un Técnico</option>
      {this.renderWorks()}
      </select>
      </div>
      <br/>
        <div>
      <select className="custom-select form-control" placeholder="Seleccione una califición" onChange={this.handleChangeCal.bind(this)} >
      <option value="">Seleccione una califición</option>
      {this.renderCal()}
      </select>
      </div>
        <button className="button"

          onClick={
            () => 
            {
              console.log(this.state.selectValueTecnician);
              this.props.onVote(this.state.selectValueTecnician, this.state.selectValueCal);
            }
          }
        >Enviar Califición
        </button>
      </div>
    );
  }
}

PostAdd.propTypes = {
  onVote:PropTypes.func.isRequired
};
