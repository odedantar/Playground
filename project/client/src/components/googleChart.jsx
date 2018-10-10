import React, { Component } from 'react';
import { Chart } from 'react-google-charts';


class GoogleChart extends Component {

    render() { 
        return ( 
            <div>
                <Chart
                    chartType={this.props.type}
                    width={this.props.width}
                    height={this.props.height}
                    data={this.props.data}
                    options={this.props.options}
                />
            </div>
         );
    }
}
 
export default GoogleChart;