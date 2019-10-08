import axios from 'axios';

// Fetch images from cloudinary
export function fetchImages(searchTerm) {
    axios.get(`http://localhost:5000/`)
    .then(res => {
      this.setState({data: res.data});
    });
  }
