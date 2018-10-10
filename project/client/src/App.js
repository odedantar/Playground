import React, { Component } from 'react';
import WeatherPanel from './components/weatherPanel.jsx'
import { historicalRequest } from './functions/api/requests.js'

class App extends Component {

  state = {
    json: {
      "geocode": {
        "lon": -71.301998792,
        "lat": 44.268832258
      },
      "location_id": "",
      "start_time": "2018-03-19T10:00:00Z",
      "end_time": "2018-03-19T11:00:00Z",
      "timestep": 60,
      "fields": [
        {
          "name": "temp",
          "units": "F"
        },
        {
          "name": "wind_speed",
          "units": "knots"
        },
        {
          "name": "humidity",
          "units": "%"
        }
      ]
    }
  };
  
  callback = (err, body) => {
    console.log(body);
  };

  onClick = () => {
    historicalRequest(
      this.state.json,
      this.callback
    );
  };

  render() {
    return (
        <WeatherPanel />
    );
  }
}

export default App;
