import React, { Component } from "react";
import PropTypes from "prop-types";


import { Tweets } from "../api/tweets";
import { withTracker } from "meteor/react-meteor-data";

class Tweets extends Component {

  constructor(props) {
    super(props);

  
  };
}

 
  

  
  render() {
    return (
      <div className="Tweetsj">
        
        <p> hola {this.props.tweets} </p>
        
      </div>
    );
  }
}




    

export default withTracker(
  () => {

    
    Meteor.subscribe("tweets");

    return {
      tweets: Tweets.find({}).fetch()
    };
  }
)(Tweets);
