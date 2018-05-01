import React, { Component } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3"; 


class Ranking extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
  	const svg = d3.select(this.svg);
    this.width = +svg.attr("width");
    this.height = +svg.attr("height");

	this.format = d3.format(",d");

	this.color = d3.scaleOrdinal(d3.schemeCategory20c);

	this.pack = d3.pack()
	    .size([this.width, this.height])
	    .padding(1.5);


	this.update(this.props); 
	}

	update (props){
	console.log("Update", props); 
	console.log("State", this.svg); 
		//if (!props.posts || props.post.length === 0) return ; 

		const data = [
			{
			"name" : "pepito",
			"cal" : 2 
			}, 
			{
			"name" : "juanito",
			"cal" : 3
			}, 
			{
			"name" : "doricita",
			"cal" : 3
			}
	];  


d3.json(data, function(error, classes) {
    if (error) throw error;

		  var root = d3.hierarchy({children: classes})
		      .sum(function(d) { return d.value; }) 
		      .each(function(d) {
		        if (id = d.data.id) {
		          var id, i = id.lastIndexOf(".");
		          d.id = id;
		          d.package = id.slice(0, i);
		          d.class = id.slice(i + 1);
		        }
		      });

		  var node = this.svg.selectAll(".node")
		    .data(pack(root).leaves())
		    .enter().append("g")
		      .attr("class", "node")
		      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

		  node.append("circle")
		      .attr("id", function(d) { return d.id; })
		      .attr("r", function(d) { return d.r; })
		      .style("fill", function(d) { return color(d.package); });

		  node.append("clipPath")
		      .attr("id", function(d) { return "clip-" + d.id; })
		    .append("use")
		      .attr("xlink:href", function(d) { return "#" + d.id; });

		  node.append("text")
		      .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
		    .selectAll("tspan")
		    .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
		    .enter().append("tspan")
		      .attr("x", 0)
		      .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
		      .text(function(d) { return d; });

		  node.append("title")
		      .text(function(d) { return d.id + "\n" + format(d.value); });

	});
  }

  render() {
	  	return (
	    <div> 
	    <svg width="960" 
	    	height="960" 
	    	ref = {(svg) => this.svg = svg}>
	    </svg>

	    </div> 
	   ); 
  	}
}

Ranking.propTypes = {
  
};

export default(Ranking);
