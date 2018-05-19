import React, { Component } from "react";
import PropTypes from "prop-types";


import { Comments } from "../api/comments";
import { withTracker } from "meteor/react-meteor-data";
import Service from "./Service";


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

  renderPosts() {
    return this.props.comments.slice(0, this.state.showItems).map((p,i) =>
      <div className="col-sm-4" key = {i}>
       <div className="box3">
          <Service service = {p}/>
      </div>
      </div>
    );
  }

 
  
  render() {
    return (
      <div className="services container contenido">
        
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
