import React, { Component } from 'react';
import CoordinatesForm from './coordinatesForm'
import GoogleChart from './googleChart'

class WeatherPanel extends Component {
    state = { 
        chartWidth: '500px',
        chartHeight: '500px',

        chartType: 'LineChart',
        chartData:[
            ["Year", "Sales", "Expenses"],
            ["2004", 1000, 400],
            ["2005", 1170, 460],
            ["2006", 660, 1120],
            ["2007", 1030, 540]
        ],
        chartOptions:{
            title: "Weather",
            curveType: "line",
            legend: { position: "bottom" }
        }
     };

    onSubmit = data => {

    };

    render() { 
        return ( 
            <div>
                <GoogleChart 
                    width={this.state.chartWidth}
                    height={this.state.chartHeight}
                    type={this.state.chartType}
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                />
                <CoordinatesForm onSubmit={data => this.onSubmit(data)}/>
            </div>
         );
    }
}
 
export default WeatherPanel;