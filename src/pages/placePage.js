import React, { Component } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';

import Title from '../index'

import mapIcon from '../images/mapIcon.png'

export default class Place extends Component {
    render() {
      const { params } = this.props.match;
      const data = this.props.location.state.data[params.id];
      const stateData = this.props.location.state.data

      const currentOrder = parseInt(stateData[params.id]['order'])
      const previousPlace = Object.keys(stateData).find(ele => stateData[ele]['order'] === (currentOrder - 1).toString())
      const nextPlace = Object.keys(stateData).find(ele => stateData[ele]['order'] === (currentOrder + 1).toString())
      
      // Object.keys(stateData).map((ele) => {
      //   // Get current order no.

      //   // Get next order no. and name
      //   // Get previous order no. and name
      //   console.log(parseInt(stateData[ele]['order'])+1);
        
      // })
      
      return (
        <div style={styles.container}>
          <Title title={params.id} />
          <Link to={'/'}>
            <img src={mapIcon} alt={'map icon'} style={styles.icon}/>
          </Link>
            <CloudinaryContext cloudName="dsn52dgsa" style={styles.images}>
              <div style={{'columnCount':3}}>
              { (data) && data['images'].map(images  => {
                return (
                    <Image key={images['public_id']} publicId={images['public_id']} style={styles.image}>
                    </Image>
                )
              })}
              </div>
            </CloudinaryContext>
            <Link to={{pathname: `/place/${previousPlace}`, state: {"data": this.props.location.state.data}}} style={styles.previous}><p>{previousPlace}</p></Link>
            <Link to={{pathname: `/place/${nextPlace}`, state: {"data": this.props.location.state.data}}} style={styles.next}><p>{nextPlace}</p></Link>
      </div> 
      )
    }
}


const styles = {
  header: {
    fontFamily: 'Rozha One'
  },
  container: {
    height: 'calc(100% - 163px)',
  },
  icon: {
    height: '50px',
    position: 'absolute',
    top: '25px',
    left: '25px',
  },
  images: {
    height: '100%',
    width: '100%',
    overflow: 'scroll',
    // columnCount: 3,
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '25px',
  },
  previous: {
    position: 'absolute',
    top: '50%',
    transform: 'rotate(90deg)',
    left: '-10px',
    fontFamily: 'Montserrat'
  },
  next: {
    position: 'fixed',
    top: '50%',
    transform: 'rotate(-90deg)',
    right: '0%',
    fontFamily: 'Montserrat'
  }
}