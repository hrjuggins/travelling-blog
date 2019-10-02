import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import axios from 'axios';

import markerIcon from '../images/marker.png'

const Map = ReactMapboxGl({
    accessToken:
      process.env.REACT_APP_MAPBOX_TOKEN
  });


export default class MapPage extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            locations: [],
            location: undefined,
        }
    }
    
    componentDidMount() {
        if (this.props.mains) {
            this.props.mains.forEach((element) => {
                this.geocodePlace(element)
            })
        }
    }
    async geocodePlace(list) {
        const coord = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${list['public_id']}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
        console.log(coord.data.features[0].geometry.coordinates);
        this.setState({
            locations: [...this.state.locations, coord.data.features[0].geometry.coordinates]
        })
        
    }

    render() {  
        const image = new Image(30, 30);
        image.src = markerIcon;
        const images = ["myImage", image];
        return (
            <div>
            <Map
                style={"mapbox://styles/mapbox/streets-v9"}
                containerStyle={{
                    height: '50vh',
                    width: '50vw',
                }}
                zoom={[4]}
                center={this.state.locations[this.state.locations.length-1]}
            >
                {this.state.locations &&
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
                }
                {this.state.locations &&
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
                }   
                
            </Map>
        </div>
            
        )
    }
}

