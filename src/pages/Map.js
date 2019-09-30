import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
import Geocode from "react-geocode";

import markerIcon from '../images/marker.png'

const Map = ReactMapboxGl({
    accessToken:
      process.env.REACT_APP_MAPBOX_TOKEN
  });


// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyD3t4C_qPZHkhw1p7FZGWdiCFWsdR31EVU");
 

export default class MapPage extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            locations: [
                [-43.172897,-22.906847],
                [-44.715179, -23.218161],
                [-46.649197, -23.53510]
            ],
            location: undefined,
        }
    }

    geocodePlace() {
        // Get latidude & longitude from address.
        Geocode.fromAddress("Eiffel Tower").then(
            response => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            },
            error => {
            console.error(error);
            }
        );
    }

    render() {
        const image = new Image(30, 30);
        image.src = markerIcon;
        const images = ["myImage", image];
        return (
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '50vh',
                    width: '50vw',
                }}
                zoom={[4]}
                center={this.state.locations[this.state.locations.length-1]}
            >
                <Layer 
                    type="line"
                    layout={{
                        "line-join": "round",
                        "line-cap": "round"
                    }}
                    paint={{
                        "line-color": "#f78f8f",
                        "line-width": 6
                    }}
                >
                    <Feature coordinates={this.state.locations} />
                </Layer>
                <Layer 
                    type="symbol" 
                    id="marker" 
                    layout={{ "icon-image": "myImage", "icon-allow-overlap": true }}
                    images={images}
                >
                    {this.state.locations.map((location) => (
                        <Feature 
                            key={location.id} 
                            coordinates={location} 
                            onClick={()=>{console.log(location)}}
                        />
                    ))}
                    
                </Layer>
            </Map>
        )
    }
}

