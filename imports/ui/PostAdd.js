import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PostAdd extends Component {
  constructor(props) {
    super(props);

    this.state={

    };
  }
  clearContents(element) {
    this.refs.title.value = '';
    this.refs.text.value = ''; 
  }



  render() {
    return (
      <div className="PostAdd">
      
      

      <h4>Escribe a la persona que quieres calificar y su califición </h4>
      <div>
        <textarea id="title" type="text" role="textbox"  placeholder="Nombre de la persona que quiere calificar" aria-label="Favor&#39;s Title" ref="title"/>
        </div>
        <div>
        <textarea className="com-text" role="textbox" type="text" placeholder="Califición (de 1 a 10) " aria-label="Type a description of the favor you need help with" ref="text"/>
        </div>
        <button className="my-btn-2"

          onClick={
            () => 
            {
              this.props.onAdd(this.refs.title.value, this.refs.text.value);
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
  onAdd:PropTypes.func.isRequired
};
