import axios from 'axios';

function reverseOrderData(dataToSort) {
    const orderedKeys = []
    const orderedData = {}
    Object.keys(dataToSort).forEach(key => {
      orderedKeys.push(dataToSort[key]['order'])
    })
    orderedKeys.sort().reverse()
    orderedKeys.forEach(key => {
      Object.keys(dataToSort).forEach(obj => {
        if (dataToSort[obj]['order'] == key) {
          orderedData[obj] = dataToSort[obj]
        }
      })
    })
    return orderedData
  }

// Fetch images from cloudinary
export function fetchImages(searchTerm) {
    console.log('api called');
    axios.get(`https://n9fufwwrh3.execute-api.us-east-1.amazonaws.com/dev`)
    .then(res => {
      this.setState({data: reverseOrderData(res.data)});
    });
  }
