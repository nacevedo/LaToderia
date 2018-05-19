import React, { Component } from "react";
import PropTypes from "prop-types";


import { Posts } from "../api/posts";
import { withTracker } from "meteor/react-meteor-data";
import Tecnico from "./Tecnico";


class Tecnicos extends Component {

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
          this.state.showItems >= this.props.posts.length ?
            this.state.showItems : this.state.showItems + 10
      })
    }

  renderPosts() {
    return this.props.posts.slice(0, this.state.showItems).map((p,i) =>
      <div className="col-sm-4" key = {i}>
       <div className="panel">
          <Tecnico tecnico = {p}/>
      </div>
      </div>
    );
  }

 
  
  render() {
    return (
      <div className="tec-list">
        
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

    Meteor.subscribe("post");

    return {
      posts: Posts.find({}).fetch()
    };
  }
)(Tecnicos);
