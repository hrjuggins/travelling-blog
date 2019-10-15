import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      data: {}
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
            <div style={styles.big}> 
              <MapPage data={this.state.data}/>
              <Places data={this.state.data}/>
            </div> 
        </div>
      )
    }
    if (window.innerWidth < 600) {
      return (
        <div style={styles.container}>
          <Title title={'Travel Map'} />
            <div style={styles.small}> 
              <MapPage data={this.state.data}/>
              <Places data={this.state.data}/>
            </div> 
        </div>
      )
    }
  }
}

const styles = {
  container: {
    height: 'calc(100% - 136px)',
  },
  big: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '100%',
  },
  small: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  list: {
    listStyleType: 'none',
    display: "flex",
    justifyContent: "space-evenly",
    margin: 0,
    padding: "0 0 50px",
  },
  icon: {
    height: '50px',
    position: 'absolute',
    top: '25px',
  },
  mapIcon: {
    left: '25px',
  },
  listIcon: {
    height: '30px',
    top: '35px',
    right: '25px',
  },
}