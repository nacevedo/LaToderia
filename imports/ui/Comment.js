import React, { Component } from "react";
import PropTypes from "prop-types";
import {Route, NavLink, HashRouter} from "react-router-dom";

import { Chats } from "../api/chats";


export default class Comment extends Component {
  constructor(props) {
    super(props); 

  }



  actualUN() {

    if(Meteor.user().profile == undefined)
      {
        return Meteor.user().username;
      }
      else
      {
        return Meteor.user().profile.name;
      }
  }


  userName(){
    if(this.props.comment.who.profile == undefined){
      return this.props.comment.who.username;
    }
    else{
      return this.props.comment.who.profile.name;
    }
  }

  render() {
    return (
      <div id="Comment">
      <div className="box3">
        <div className="row">
        <div className="col-sm-4"><span className="fa">&#xf007;</span>&nbsp;{this.userName()}</div>
        <div className="col-sm-8">
        <NavLink exact to="/chat"> <button className="my-btn-5" onClick = {this.addChat.bind(this)}> New chat with {this.userName()}</button> </NavLink>
        </div>
        </div>
        <hr/>
        
        <div>{this.props.comment.text}</div>
        {this.renderVotes()}
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  onVote: PropTypes.func.isRequired
};
