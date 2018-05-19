import React, { Component } from "react";
import PropTypes from "prop-types";


import { Tweets } from "../api/tweets";
import { withTracker } from "meteor/react-meteor-data";
import Tweet from "./Tweet";


class TweetList extends Component {

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
          this.state.showItems >= this.props.tweets.length ?
            this.state.showItems : this.state.showItems + 10
      })
    }

  renderPosts() {
    return this.props.tweets.slice(0, this.state.showItems).map((p,i) =>
      <div className="col-sm-3" key = {i}>
       <div className="panel">
          <Tweet tweet = {p}/>
      </div>
      </div>
    );
  }

 
  
  render() {
    return (
      <div className="tweet-list">
        
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

    
    Meteor.subscribe("tweets");

    return {
      tweets: Tweets.find({}).fetch()
    };
  }
)(TweetList);
