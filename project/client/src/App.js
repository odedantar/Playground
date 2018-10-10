import React, { Component } from 'react';
import { sendRequest } from './functions/weather.js'
import CoordinatesForm from './components/coordinatesForm.jsx'

class App extends Component {
  render() {
    return (
        <CoordinatesForm/>
    );
  }
}

export default App;
