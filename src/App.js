import React, { Component } from 'react';
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// import ImageUpload from './pages/ImageUpload'
import Places from './pages/Places'
import MapPage from './pages/Map'
import Title from './index'

import { fetchImages, geocodePlace } from './Helper'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        "Paraty": {
        "coords": [
        -44.7175,
        -23.2221
        ],
        "images": [
        {
        "access_mode": "public",
        "bytes": 103840,
        "created_at": "2019-10-04T14:36:58Z",
        "format": "jpg",
        "height": 349,
        "public_id": "alpaca/2 - Paraty/1441261020970",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199818/alpaca/2%20-%20Paraty/1441261020970.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199818/alpaca/2%20-%20Paraty/1441261020970.jpg",
        "version": 1570199818,
        "width": 620
        },
        {
        "access_mode": "public",
        "bytes": 346414,
        "created_at": "2019-10-04T14:36:57Z",
        "format": "jpg",
        "height": 799,
        "main": true,
        "public_id": "alpaca/2 - Paraty/GettyImages-479697183_full",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199817/alpaca/2%20-%20Paraty/GettyImages-479697183_full.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199817/alpaca/2%20-%20Paraty/GettyImages-479697183_full.jpg",
        "version": 1570199817,
        "width": 1200
        },
        {
        "access_mode": "public",
        "bytes": 299973,
        "created_at": "2019-10-08T14:03:54Z",
        "format": "jpg",
        "height": 1805,
        "public_id": "alpaca/2 - Paraty/Paraty-02",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570543434/alpaca/2%20-%20Paraty/Paraty-02.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570543434/alpaca/2%20-%20Paraty/Paraty-02.jpg",
        "version": 1570543434,
        "width": 1200
        },
        {
        "access_mode": "public",
        "bytes": 388954,
        "created_at": "2019-10-04T14:37:04Z",
        "format": "jpg",
        "height": 1280,
        "public_id": "alpaca/2 - Paraty/Paraty-2-RSZ",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199824/alpaca/2%20-%20Paraty/Paraty-2-RSZ.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199824/alpaca/2%20-%20Paraty/Paraty-2-RSZ.jpg",
        "version": 1570199824,
        "width": 1920
        },
        {
        "access_mode": "public",
        "bytes": 322242,
        "created_at": "2019-10-04T14:37:00Z",
        "format": "jpg",
        "height": 853,
        "public_id": "alpaca/2 - Paraty/paraty-activities-and-things-to-do-travel-guide",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199820/alpaca/2%20-%20Paraty/paraty-activities-and-things-to-do-travel-guide.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199820/alpaca/2%20-%20Paraty/paraty-activities-and-things-to-do-travel-guide.jpg",
        "version": 1570199820,
        "width": 1280
        }
        ],
        "order": "2"
        },
        "Rio De Janeiro": {
        "coords": [
        -43.2094,
        -22.911
        ],
        "images": [
        {
        "access_mode": "public",
        "bytes": 80587,
        "created_at": "2019-10-04T14:37:55Z",
        "format": "jpg",
        "height": 300,
        "public_id": "alpaca/1 - Rio De Janeiro/700px-Rio_De_Janeiro_-_Rafael_Defavari",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199875/alpaca/1%20-%20Rio%20De%20Janeiro/700px-Rio_De_Janeiro_-_Rafael_Defavari.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199875/alpaca/1%20-%20Rio%20De%20Janeiro/700px-Rio_De_Janeiro_-_Rafael_Defavari.jpg",
        "version": 1570199875,
        "width": 699
        },
        {
        "access_mode": "public",
        "bytes": 22552,
        "created_at": "2019-10-04T14:37:49Z",
        "format": "jpg",
        "height": 274,
        "main": true,
        "public_id": "alpaca/1 - Rio De Janeiro/iStock-458256315",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199869/alpaca/1%20-%20Rio%20De%20Janeiro/iStock-458256315.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199869/alpaca/1%20-%20Rio%20De%20Janeiro/iStock-458256315.jpg",
        "version": 1570199869,
        "width": 370
        },
        {
        "access_mode": "public",
        "bytes": 891799,
        "created_at": "2019-10-04T14:37:44Z",
        "format": "jpg",
        "height": 1280,
        "public_id": "alpaca/1 - Rio De Janeiro/rio-de-janeiro-1963744_1920",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199864/alpaca/1%20-%20Rio%20De%20Janeiro/rio-de-janeiro-1963744_1920.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199864/alpaca/1%20-%20Rio%20De%20Janeiro/rio-de-janeiro-1963744_1920.jpg",
        "version": 1570199864,
        "width": 1920
        }
        ],
        "order": "1"
        },
        "Sao Paulo": {
        "coords": [
        -43.2094,
        -22.911
        ],
        "images": [
        {
        "access_mode": "public",
        "bytes": 80587,
        "created_at": "2019-10-04T14:37:55Z",
        "format": "jpg",
        "height": 300,
        "public_id": "alpaca/1 - Rio De Janeiro/700px-Rio_De_Janeiro_-_Rafael_Defavari",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199875/alpaca/1%20-%20Rio%20De%20Janeiro/700px-Rio_De_Janeiro_-_Rafael_Defavari.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199875/alpaca/1%20-%20Rio%20De%20Janeiro/700px-Rio_De_Janeiro_-_Rafael_Defavari.jpg",
        "version": 1570199875,
        "width": 699
        },
        {
        "access_mode": "public",
        "bytes": 22552,
        "created_at": "2019-10-04T14:37:49Z",
        "format": "jpg",
        "height": 274,
        "main": true,
        "public_id": "alpaca/1 - Rio De Janeiro/iStock-458256315",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199869/alpaca/1%20-%20Rio%20De%20Janeiro/iStock-458256315.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199869/alpaca/1%20-%20Rio%20De%20Janeiro/iStock-458256315.jpg",
        "version": 1570199869,
        "width": 370
        },
        {
        "access_mode": "public",
        "bytes": 891799,
        "created_at": "2019-10-04T14:37:44Z",
        "format": "jpg",
        "height": 1280,
        "public_id": "alpaca/1 - Rio De Janeiro/rio-de-janeiro-1963744_1920",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199864/alpaca/1%20-%20Rio%20De%20Janeiro/rio-de-janeiro-1963744_1920.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199864/alpaca/1%20-%20Rio%20De%20Janeiro/rio-de-janeiro-1963744_1920.jpg",
        "version": 1570199864,
        "width": 1920
        }
        ],
        "order": "3"
        },
        "Campo Grande": {
        "coords": [
        -43.2094,
        -22.911
        ],
        "images": [
        {
        "access_mode": "public",
        "bytes": 80587,
        "created_at": "2019-10-04T14:37:55Z",
        "format": "jpg",
        "height": 300,
        "public_id": "alpaca/1 - Rio De Janeiro/700px-Rio_De_Janeiro_-_Rafael_Defavari",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199875/alpaca/1%20-%20Rio%20De%20Janeiro/700px-Rio_De_Janeiro_-_Rafael_Defavari.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199875/alpaca/1%20-%20Rio%20De%20Janeiro/700px-Rio_De_Janeiro_-_Rafael_Defavari.jpg",
        "version": 1570199875,
        "width": 699
        },
        {
        "access_mode": "public",
        "bytes": 22552,
        "created_at": "2019-10-04T14:37:49Z",
        "format": "jpg",
        "height": 274,
        "main": true,
        "public_id": "alpaca/1 - Rio De Janeiro/iStock-458256315",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199869/alpaca/1%20-%20Rio%20De%20Janeiro/iStock-458256315.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199869/alpaca/1%20-%20Rio%20De%20Janeiro/iStock-458256315.jpg",
        "version": 1570199869,
        "width": 370
        },
        {
        "access_mode": "public",
        "bytes": 891799,
        "created_at": "2019-10-04T14:37:44Z",
        "format": "jpg",
        "height": 1280,
        "public_id": "alpaca/1 - Rio De Janeiro/rio-de-janeiro-1963744_1920",
        "resource_type": "image",
        "secure_url": "https://res.cloudinary.com/dsn52dgsa/image/upload/v1570199864/alpaca/1%20-%20Rio%20De%20Janeiro/rio-de-janeiro-1963744_1920.jpg",
        "type": "upload",
        "url": "http://res.cloudinary.com/dsn52dgsa/image/upload/v1570199864/alpaca/1%20-%20Rio%20De%20Janeiro/rio-de-janeiro-1963744_1920.jpg",
        "version": 1570199864,
        "width": 1920
        }
        ],
        "order": "4"
        }
        }
    }
    this.fetchImages = fetchImages.bind(this)
  }

  componentDidMount() {
    this.fetchImages("main")
  }
  render() {
    if (window.innerWidth > 600) {
      return (
        
        <div style={styles.container}>
          <Title title={'Travel Map'} />
            <div style={styles.main}> 
              <MapPage data={this.state.data}/>
              <Places data={this.state.data}/>
            </div> 
        </div>
      )
    }
    if (window.innerWidth < 600) {
      return (
        <div style={styles.main}>
          <MapPage data={this.state.data}/>
          <Places data={this.state.data}/>
        </div>
      )
    }
  }
}

const styles = {
  container: {
    height: 'calc(100% - 163px)',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '100%',
  },
  list: {
    listStyleType: 'none',
    display: "flex",
    justifyContent: "space-evenly",
    margin: 0,
    padding: "0 0 50px",
  }
}