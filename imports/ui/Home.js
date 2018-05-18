import React, { Component } from "react";
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Ranking from "./Ranking";
import PostAdd from "./PostAdd";
import TweetList from "./TweetList";

class Home extends Component {


	constructor() {
		super();

		this.state = {
			
		};  


	}


	render() {

		return (

			<div id="home-city" className ="container contenido">
				<TweetList/>
				<div id="page" className="container">
					
					<div className="row">
					  <div className="col-sm-3">
					  	<img  src="images/logo.png" alt="Logo La Todería"/>
					  </div>
					  <div className="col-sm-9">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
					  
					  <ol className="carousel-indicators">
					    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
					    <li data-target="#myCarousel" data-slide-to="1"></li>
					    <li data-target="#myCarousel" data-slide-to="2"></li>
					    <li data-target="#myCarousel" data-slide-to="3"></li>
					  </ol>
					  
					  
					  <div className="carousel-inner">
					    <div className="item active">
					      <img src="https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Pintura" width = "300px"/>
					    </div>
					    <div className="item active">
					      <img src="https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="House" width = "300px"/>
					    </div>
					    <div className="item">
					      <img src="https://images.pexels.com/photos/345135/pexels-photo-345135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Carpinteria" width = "300px"/>
					    </div>

					    <div className="item">
					      <img src="https://images.pexels.com/photos/756883/pexels-photo-756883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Ventana" width = "300px"/>
					    </div>
					  </div>

					
					  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
					    <span className="glyphicon glyphicon-chevron-left"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="right carousel-control" href="#myCarousel" data-slide="next">
					    <span className="glyphicon glyphicon-chevron-right"></span>
					    <span className="sr-only">Next</span>
					  </a>
					</div>
					</div>

					</div>
		          <h3> Calificaciones de los técnicos de La Todería</h3>
		          <Ranking posts = {this.props.posts} />
		          <PostAdd onVote = {this.props.onVote.bind(this)} posts={this.props.posts}/> 
		        </div>
			</div>
			);
	}
}


export default Home;