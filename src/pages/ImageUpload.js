import React, { Component } from 'react';
import '../App.css';

export default class ImageUpload extends Component {

    mediaLibrary() {
        window.cloudinary.openMediaLibrary({
          cloud_name: 'dsn52dgsa',
          api_key: '539973769931323',
          username: 'hrjuggins@gmail.com',
          button_class: 'myBtn',
          button_caption: 'Open',
          insert_transformation: true,
        })
    }
    render() {
        return (
            <button onClick={this.mediaLibrary.bind(this)}>Upload image</button>
        )
    }
}
