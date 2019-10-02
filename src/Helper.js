import axios from 'axios';

// Fetch images from cloudinary
export function fetchImages(searchTerm) {
    axios.get(`https://res.cloudinary.com/dsn52dgsa/image/list/${searchTerm}.json`)
    .then(res => {
      this.setState({mains: res.data.resources});
    });
  }


// Get coordinates from list of places
export function geocodePlace(place) {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
    .then(res => {
        this.setState({locations: res.data.features[0].geometry.coordinates})
    });
}