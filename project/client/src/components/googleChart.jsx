import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class GoogleChart extends Component {
    
    state = {
        width: this.props.width,
        height: this.props.height,

        type: this.props.type,
        data: this.props.data,
        options: this.props.options
    };

    render() { 
        return ( 
            <div>
                <Chart
                    chartType={this.state.type}
                    width={this.state.width}
                    height={this.state.height}
                    data={this.state.data}
                    options={this.state.options}
                />
            </div>
         );
    }
}
 
export default GoogleChart;