import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:
      process.env.REACT_APP_MAPBOX_TOKEN
  });


export default class MapSnippet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: ''
        }
    }

    componentDidMount() {
        this.getCountryMap(this.props.place)
    }

    getCountryMap(country) {
        switch(country) {
            case ' Paraty':
                console.log('corerct');
                this.setState({
                    style: "mapbox://styles/hrjuggins/ck1g7nljv02hq1cqml68sh3ks/draft"
                })
                break;
        }
    }

    render() {         
        return (
            <div>
            <Map
                style={this.state.style}
                containerStyle={{
                    height: '80vh',
                    width: '100vw',
                }}
                zoom={[3]}
                center={[
                    -44.7175,
                    -23.2221
                    ]}
            >
            </Map>
        </div>
            
        )
    }
}

