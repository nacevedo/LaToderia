import React, {Component} from "react";
import {Meteor} from "meteor/meteor";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "Recharts" ;

class SimpleBarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : []
        };
    }
 

    render() {
        return(
    <BarChart width={600} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="cuantos" fill="#82ca9d" />
    </BarChart>
    );
   }    
}

export default SimpleBarChart;