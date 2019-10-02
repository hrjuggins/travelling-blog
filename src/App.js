import React, { Component } from 'react';
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// import ImageUpload from './pages/ImageUpload'
import ImageFetch from './pages/ImageFetch'
import MapPage from './pages/Map'
import Place from './pages/placePage';

import { fetchImages, geocodePlace } from './Helper'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mains: []
    }
    this.fetchImages = fetchImages.bind(this)
    this.geocodePlace = geocodePlace.bind(this)
  }

  componentDidMount() {
    // fetch places listed as "main" from cloudinary
    this.fetchImages("main")
    // this.geocodePlace("sao paulo")
  }

  // place those place names to map component
  // fetch main images from imagefetch component
  render() {
    return (
      <div className="App" style={main}>
        <Router>
          <div>
              <ul>
                  <li>
                      <NavLink activeClassName="active" to="/map">
                          Map
                      </NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" to="/places">
                          Places
                      </NavLink>
                  </li>
              </ul>
              <Switch>
                  <Route path='/place/:id' component={Place} />
                  <Route path='/map' render={(props) => <MapPage {...props} mains={this.state.mains}/>} />
                  <Route path='/places' render={(props) => <ImageFetch {...props} mains={this.state.mains}/>} />
              </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  justifyContent: 'space-around'
}