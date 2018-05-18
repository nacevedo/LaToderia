import React, { Component } from "react";
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Ranking from "./Ranking";
import PostAdd from "./PostAdd";


class Home extends Component {


	constructor() {
		super();

		this.state = {
			
		};  


	}


	render() {

		return (
			<div id="home-city" className ="container contenido">
				<div id="page" className="container">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
					  
					  <ol className="carousel-indicators">
					    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					    <li data-target="#myCarousel" data-slide-to="1"></li>
					    <li data-target="#myCarousel" data-slide-to="2"></li>
					  </ol>

					  
					  <div className="carousel-inner">
					    <div class="item active">
					      <img src="https://www.shirley-davi.net/imagenes/logo.png" alt="Los Angeles" width = "300px"/>
					    </div>

					    <div className="item">
					      <img src="https://www.shirley-davi.net/imagenes/logo.png" alt="Chicago" width = "300px"/>
					    </div>

					    <div className="item">
					      <img src="https://www.shirley-davi.net/imagenes/logo.png" alt="New York" width = "300px"/>
					    </div>
					  </div>

					
					  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
					    <span className="glyphicon glyphicon-chevron-left"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="right carousel-control" href="#myCarousel" data-slide="next">
					    
					    <span className="sr-only">Next</span>
					  </a>
					</div>
		          <h3> Hay {this.props.numTec} técnicos </h3>
		          <Ranking posts = {this.props.posts} />
		          <PostAdd onAdd = {this.props.onAdd.bind(this)}/> 
		        </div>
			</div>
			);
	}
}


export default Home;