import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { Redirect } from 'react-router-dom';

import markerIcon from '../images/marker.png'

const Map = ReactMapboxGl({
    accessToken:
      process.env.REACT_APP_MAPBOX_TOKEN
  });


export default class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toPlace: false,
            place: false,
        }
    }

    markerClick(place) {
        console.log(place);
        
        this.setState({
            toPlace: true,
            place: place
        })
    }
    markerHover(place) {
        console.log(place);
    }

    render() {         
        const data = this.props.data
        const coords = []
        // create new array of array of coords
        data && Object.keys(data).map(item => {
            coords.push(data[item]['coords']);
        });
        const image = new Image(20, 20);
        image.src = markerIcon;
        const images = ["myImage", image];

        if (this.state.toPlace) {
            return <Redirect to={{pathname: `/place/${this.state.place}`, state: {"data": data}}}/>
        }

        const width = window.innerWidth

        return (
            <Map
                style={"mapbox://styles/mapbox/satellite-streets-v9"}
                containerStyle={{...width < 600 ? styles.small : styles.big}}
                zoom={[4]}
                center={coords[0]}
            >
                
                 <Layer 
                    type="line"
                    layout={{
                        "line-join": "round",
                        "line-cap": "round"
                    }}
                    paint={{
                        "line-color": "#f78f8f",
                        "line-width": 4
                    }}
                >
                    <Feature coordinates={coords} />
                </Layer>
                
                {data && 
                <Layer 
                    type="symbol" 
                    id="marker" 
                    layout={{ "icon-image": "myImage", "icon-allow-overlap": true }}
                    images={images}
                >
                {Object.keys(data).map(item => (
                    <Feature 
                        key={data[item]['order']} 
                        coordinates={data[item]['coords']} 
                        onClick={()=>{this.markerClick(item)}}
                        
                        
                    />
                ))}
                </Layer> 
                }
            </Map>
        )
    }
}

const styles = {
    big: {
        height: '100%',
        width: '45vw',
    },
    small: {
        height: '40%',
        width: '100vw',
    }
}