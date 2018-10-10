import React, { Component } from 'react';
import CoordinatesForm from './coordinatesForm'
import GoogleChart from './googleChart'
import { historicalRequest } from '../functions/api/requests.js'
import { rawToChart } from '../functions/dataPasers.js'


class WeatherPanel extends Component {
    constructor(props){
        super(props)

        this.callback = this.callback.bind(this);
    }

    state = { 
        chartWidth: '500px',
        chartHeight: '500px',

        chartType: 'LineChart',
        chartData: [
            ['Time', 'Temperature', 'Wind Speed', 'Humidity'],
            ['0', 0, 0, 0]
        ],
        chartOptions:{
            title: "Weather",
            curveType: "line",
            legend: { position: "bottom" }
        }
     };
    
    callback = (err, body) => {
        this.setState({ chartData: rawToChart(body) });
    };

    onSubmit = data => {
        historicalRequest(
            data.longitude,
            data.latitude,
            "2018-03-19T00:00:00Z",
            "2018-03-19T24:00:00Z",
            10,
            this.callback
        );
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