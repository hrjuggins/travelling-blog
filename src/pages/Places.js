import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CloudinaryContext, Image } from 'cloudinary-react';
import '../App.css';

export default class Places extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="gallery" style={styles.gallery}>
          <CloudinaryContext cloudName="dsn52dgsa">
            { (data) && Object.keys(data).map((place, i) => {
              return (
                <div key={i}>
                  <Link to={{pathname: `/place/${place}`, state: {"data": data}}} style={styles.list}>
                    <h1 style={{"textTransform": "capitalize"}}>{place}</h1>
                    {data[place]['images'].map((item, i) => {
                        if (item['main'])
                        return <Image key={i} publicId={item['public_id']} style={{width: '100px', height:"90%"}}></Image>
                      })}
                    </Link>
                </div>
              )
           })}
          </CloudinaryContext>
      </div>
    );
  }
}

const styles = {
  gallery: {
    width: '45vw',
    overflow: 'scroll',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
    height: '75px',
    width: 'calc(100% - 15px)',
    fontFamily: 'Montserrat',
    fontSize: '0.5em',
    paddingLeft: '15px',
    textDecoration: 'none',
    color: '#333',
  }
}
