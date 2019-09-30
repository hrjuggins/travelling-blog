import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Image } from 'cloudinary-react';

export default class Place extends Component {
    constructor(props) {
        super(props);
        this.state = {
          gallery: []
        }
      }

    componentDidMount() {
        console.log(this.props.match.params.id);
        
    this.fetchImages(this.props.match.params.id) 
    }

    fetchImages(searchTerm) {
        axios.get(`https://res.cloudinary.com/dsn52dgsa/image/list/${searchTerm}.json`)
        .then(res => {
        console.log(res.data.resources);
        this.setState({gallery: res.data.resources});
        });
    }
    render() {
        const { params } = this.props.match
        return (
            <div>
                <h1>Place name</h1>
                <p>{params.id}</p>
                <h1>Gallery</h1>
        <div>
          <CloudinaryContext cloudName="dsn52dgsa">
            { this.state.gallery.map(data => {
              return (
                
                <div key={data.public_id}>
                    <Image publicId={data.public_id} style={{width:"200px", height:"200px"}}>

                    </Image>
                </div>
              )
            })}
          </CloudinaryContext>
        </div>
            </div>
        )
    }
}