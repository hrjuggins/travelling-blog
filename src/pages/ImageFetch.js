import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { CloudinaryContext, Image } from 'cloudinary-react';
import '../App.css';

export default class ImageFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      gallery: []
    }
  }

  componentDidMount() {
   this.fetchImages("main") 
  }

  fetchImages(searchTerm) {
    axios.get(`https://res.cloudinary.com/dsn52dgsa/image/list/${searchTerm}.json`)
    .then(res => {
      console.log(res.data.resources);
      this.setState({gallery: res.data.resources});
    });
  }


  render() {
    return (
      <div className="gallery">
        <div>
          <CloudinaryContext cloudName="dsn52dgsa">
            { this.state.gallery.map(data => {
              return (
                
                <div key={data.public_id}>
                  <Link to={`/place/${data.public_id}`}>
                    <h1>{data.public_id}</h1>
                    <Image publicId={data.public_id} style={{width:"200px", height:"200px"}}>

                    </Image>
                  </Link>
                </div>
              )
            })}
          </CloudinaryContext>
        </div>
      </div>
    );
  }
  
}

