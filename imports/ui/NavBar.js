import React, {Component} from "react";
import AccountsUIWrapper from './AccountsUIWrapper.js';
import {NavLink} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./Home";
import AreasTrabajo from "./AreasTrabajo";
import Why from "./Why";
import About from "./About";
import SolicitarServicio from "./SolicitarServicio";
import AgregarTecnico from "./AgregarTecnico";
import PostList from "./PostList";

class NavBar extends Component {


    render() {
        return (
            <Router>
<div>
            <div id="menu" className="container">
            <div id="navbar-content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">



            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">

            <li className="nav-item">
            <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact className="nav-link" to="/areas-de-trabajo">Áreas de Trabajo</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact className="nav-link" to="/porque-la-toderia">Porqué La Todería</NavLink>
            </li> 

            <li className="nav-item">
            <NavLink exact className="nav-link" to="/acerca-de-nosotros">Acerca de Nosotros</NavLink>
            </li>


            <li className="nav-item">
            <NavLink exact className="nav-link" to="/solicitar-servicio">Solicitar servicio</NavLink>
            </li>
                                    
                                        {Roles.userIsInRole(Meteor.userId(), ['super-admin']) ?
                                            <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/agregar-técnico">Agregar un técnico</NavLink>
                                            </li> : ""
                                        }

                                        {Roles.userIsInRole(Meteor.userId(), ['super-admin']) ?
                                            <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/ver-solicitudes">Solicitudes</NavLink>
                                            </li> : ""
                                        }
                                        <li className="nav-item center-login"><AccountsUIWrapper/></li>

                                        </ul>
                                        </div>
                                        </div>
                                        </nav>
                                        </div>
                                        </div>

                                        <Route exact path="/" render={() => <Home posts = {this.props.posts} onAdd = {this.props.onAdd} numTec={this.props.munTec}/>}/>
                                        <Route exact path="/areas-de-trabajo" component={AreasTrabajo}/>
                                        <Route exact path="/porque-la-toderia" component={Why}/>
                                        <Route exact path="/acerca-de-nosotros" component={About}/>

                                        <Route exact path="/solicitar-servicio" render={()=> <SolicitarServicio onAddService = {this.props.onAddService} />}/>
                                        <Route exact path="/agregar-técnico" render={() => <AgregarTecnico onAdd={this.props.onAdd}/>}/>
                                        <Route exact path="/ver-solicitudes" render={() => <PostList posts = {this.props.posts} />}/>
                                        </div>
                                      
                                        </Router>

                                        );
    }
}

export default NavBar;