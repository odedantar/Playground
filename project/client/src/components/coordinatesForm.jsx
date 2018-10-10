import React, { Component } from 'react';


class CoordinatesForm extends Component {
    state = { 
        longitude: -71.301998792,
        latitude: 44.268832258
     };

     change = e => {
         this.setState({
             [e.target.name]: e.target.value
         });
     };

     onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
     };

    render() { 
        return ( 
            <div>
                <h3>Coordiantes</h3>
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
            </div>
         );
    };
};
 
export default CoordinatesForm;