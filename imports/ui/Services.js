import React, { Component } from "react";
import PropTypes from "prop-types";


import { Comments } from "../api/comments";
import { withTracker } from "meteor/react-meteor-data";
import Service from "./Service";
import SimpleBarChart from "./SimpleBarChart";


class Services extends Component {

  constructor(props) {
    super(props);

    this.handleShowMore = this.handleShowMore.bind(this);

    this.state={
        showItems: 10
    };
  }

  handleShowMore() {
      this.setState({
        showItems: 
          this.state.showItems >= this.props.comments.length ?
            this.state.showItems : this.state.showItems + 10
      })
    }

  handleData(){
    var data = []; 
    var servicios = this.props.comments; 
    var tiposServicios = []; 

    for (var i = 0; i < servicios.length ; i++)
    {
       if(!tiposServicios.includes(servicios[i].service))
       {
        tiposServicios.push(servicios[i].service);
        data.push({name: servicios[i].service, cuantos: 0});
       }
       console.log(servicios[i].service);
        for (var j = 0; j < data.length; j++){
          if (data[j].name == servicios[i].service){
            data[j].cuantos++; 
          }
        }
    }
    console.log(data);
    return data; 
  }

  renderPosts() {
    return this.props.comments.slice(0, this.state.showItems).map((p,i) =>
      <div className="col-sm-4" key = {i}>
       <div className="panel">
          <Service service = {p}/>
      </div>
      </div>
    );
  }

 
  
  render() {
    return (
      <div className="services container contenido">
        <h2>Número de cada tipo de servicio solicitado</h2>
        <div id="graph">

         <SimpleBarChart data = {this.handleData()}/>
         </div>

         

        {this.renderPosts()}
        <div className="row">
        <div className="col-sm-12">
        <button className="button" onClick={this.handleShowMore}>
          Show more!
        </button>
        </div>
        
        </div>

      </div>
    );
  }
}




    

export default withTracker(
  () => {

    Meteor.subscribe("comments");

    return {
      comments: Comments.find({}).fetch()
    };
  }
)(Services);
