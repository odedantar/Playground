import React, { Component } from 'react';

class CoordinatesForm extends Component {
    state = { 
        longitude: 0,
        latitude: 0
     };

     change = e => {
         this.setState({
             [e.target.name]: e.target.value
         });
     };

     onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
     };

    render() { 
        return ( 
            <form>
                <input 
                    name="longitude" 
                    type="number"
                    placeholder="Longitude"
                    value={this.state.longitude}
                    onChange={e => this.change(e)}
                />
                <br/>
                <input 
                    name="latitude" 
                    type="number"
                    placeholder="Latitude"
                    value={this.state.latitude}
                    onChange={e => this.change(e)}
                />
                <br/>
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
         );
    };
};
 
export default CoordinatesForm;