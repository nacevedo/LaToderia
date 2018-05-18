import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PostAdd extends Component {
  constructor(props) {
    super(props);

    this.state={

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

  handleChangeTecnician(e){
    this.setState({selectValueTecnician:e.target.value});
  }

  render() {
    return (
      <div className="PostAdd">
      
      

      <h4>Seleccione el nombre del técnico al que quiere calificar y su califición </h4>
      
      <div>
      <select className="custom-select" onChange={this.handleChangeTecnician.bind(this)} >
      <option value="">Seleccione un Técnico</option>
      {this.renderWorks()}
      </select>
      </div>
        <div>
        <textarea className="com-text" role="textbox" type="text" placeholder="Califición (de 1 a 10) " aria-label="Type a description of the favor you need help with" ref="text"/>
        </div>
        <button className="button"

          onClick={
            () => 
            {
              this.props.onVote(this.state.selectValueTecnician, this.refs.text.value);
              this.clearContents(this);
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
