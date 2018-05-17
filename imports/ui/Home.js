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
			<div id="home-city" className="container contenido">
				<div id="page" className="container">
		          <h3> Hay {this.props.numTec} técnicos </h3>
		          <Ranking posts = {this.props.posts} />
		          <PostAdd onAdd = {this.props.onAdd.bind(this)}/> 
		        </div>
			</div>
			);
	}
}


export default Home;