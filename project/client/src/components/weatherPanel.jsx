import React, { Component } from 'react';
import CoordinatesForm from './coordinatesForm'
import GoogleChart from './googleChart'

class WeatherPanel extends Component {
    state = {  };

    onSubmit = data => {

    };

    render() { 
        return ( 
            <div>
                <CoordinatesForm onSubmit={data => this.onSubmit(data)}/>
                <GoogleChart/>
            </div>
         );
    }
}
 
export default WeatherPanel;