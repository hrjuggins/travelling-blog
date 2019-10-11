import React, { Component } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';

import Title from '../index'

import mapIcon from '../images/mapIcon.png'

export default class Place extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      image: '',
    }
    this.openImage = this.openImage.bind(this)
  }

  openImage(id) {
    this.setState({
      isOpen: !this.state.isOpen,
      image: id
    })
  }
  render() {
    const { params } = this.props.match;
    const data = this.props.location.state.data[params.id];
    const stateData = this.props.location.state.data

    const currentOrder = parseInt(stateData[params.id]['order'])
    const previousPlace = Object.keys(stateData).find(ele => stateData[ele]['order'] === (currentOrder - 1).toString())
    const nextPlace = Object.keys(stateData).find(ele => stateData[ele]['order'] === (currentOrder + 1).toString())

    return (
      <div style={styles.container}>
        <Title title={params.id} />
        <Link to={'/'}>
          <img src={mapIcon} alt={'map icon'} style={styles.icon}/>
        </Link>
          <CloudinaryContext cloudName="dsn52dgsa" style={styles.images}>
            <div style={{'columnCount':3, 'columnGap': "25px"}}>
            { (data) && data['images'].map(images  => {
              return (
                  <Image 
                    key={images['public_id']} 
                    publicId={images['public_id']} 
                    style={styles.image}
                    onClick={()=>this.openImage(images['public_id'])}
                  >
                  </Image>
              )
            })}
            </div>
            {this.state.isOpen && 
            <div style={styles.enlargeDiv} onClick={()=>this.openImage('')}>
              <Image
                key={this.state.image} 
                publicId={this.state.image} 
                style={styles.enlarge}
                onClick={()=>this.openImage('')}
              > 
              </Image>
            </div>
              
            }
          </CloudinaryContext>
          <Link to={{pathname: `/place/${previousPlace}`, state: {"data": this.props.location.state.data}}} style={styles.previous}>
            <p style={styles.sideText}>{previousPlace}</p>
          </Link>
          <Link to={{pathname: `/place/${nextPlace}`, state: {"data": this.props.location.state.data}}} style={styles.next}>
            <p style={styles.sideText}>{nextPlace}</p>
          </Link>
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
    boxShadow: 'rgb(94, 94, 94) 0px 10px 35px -26px'
  },
  previous: {
    position: 'absolute',
    top: '50%',
    left: '-160px',
    transformOrigin: 'center',
    transform: 'rotate(90deg)',
    width: '400px',
    textAlign: 'center',
    textDecoration: 'None',
  },
  next: {
    position: 'absolute',
    top: '50%',
    right: '-160px',
    transformOrigin: 'center',
    transform: 'rotate(-90deg)',
    width: '400px',
    textAlign: 'center',
    textDecoration: 'None',
  },
  sideText: {
    fontFamily: 'Montserrat',
    color: '#333',
  },
  enlargeDiv: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    zIndex: 2,
    background: '#212121f2',
  },
  enlarge: {
    maxWidth: '100%',
    maxHeight: '100%',

  }
}