import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CloudinaryContext, Image } from 'cloudinary-react';
import '../App.css';

export default class ImageFetch extends Component {
  render() {
    return (
      <div className="gallery">
        <div>
          <CloudinaryContext cloudName="dsn52dgsa">
            { this.props.mains.map(data => {
              return (
                <div key={data.public_id}>
                  <Link to={`/place/${data.public_id}`}>
                    <h1 style={{"text-transform": "capitalize"}}>{data.public_id}</h1>
                    <Image publicId={data.public_id} style={{width:"200px", height:"200px"}}></Image>
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

