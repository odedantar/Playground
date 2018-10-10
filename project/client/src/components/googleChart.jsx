import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class GoogleChart extends Component {
    state = {
        options:{
            title: "Weather",
            curveType: "line",
            legend: { position: "bottom" }
        },
        data:[
            ["Year", "Sales", "Expenses"],
            ["2004", 1000, 400],
            ["2005", 1170, 460],
            ["2006", 660, 1120],
            ["2007", 1030, 540]
          ]
    };

    render() { 
        return ( 
            <div>
                <Chart
                    chartType='LineChart'
                    width='500px'
                    height='500px'
                    data={this.state.data}
                    options={this.state.options}
                />
            </div>
         );
    }
}
 
export default GoogleChart;