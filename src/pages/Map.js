import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import markerIcon from '../images/marker.png'

const Map = ReactMapboxGl({
    accessToken:
      process.env.REACT_APP_MAPBOX_TOKEN
  });

export default class MapPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // locations: [
            //     {
            //         type: 'Feature',
            //         properties: {
            //             "place": "Rio De Janeiro"
            //         },
            //         geometry: {
            //             type: "Point",
            //             coordinates: [-43.172897,-22.906847]
            //         }
            //     },
            //     {
            //         type: 'Feature',
            //         properties: {
            //             "place": "Paraty"
            //         },
            //         geometry: {
            //             type: "Point",
            //             coordinates: [-44.715179, -23.218161]
            //         }
            //     }
                
            //   ]   
              locations: [
                    [-43.172897,-22.906847],
                    [-44.715179, -23.218161],
                    [-46.649197, -23.53510]
              ]   
        }
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
                zoom={[5]}
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
                        <Feature key={location.id} coordinates={location} />
                    ))}
                    
                </Layer>
            </Map>
        )
    }
}

