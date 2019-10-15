import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Places from './pages/Places'
import MapPage from './pages/Map'
import Place from './pages/placePage';


export default class Title extends Component {
    render() {
        return (
            <h1 style={styles.heading}>{this.props.title}</h1>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div className="App" style={styles.outer}>
                <Router>
                    <Route exact={true} path='/' component={App} />
                    <Route path='/map' component={MapPage} />
                    <Route path='/places' component={Places} />                    
                    <Route path='/place/:id' component={Place} />
                </Router>
            </div>
        )
    }
}


const styles = {
    outer: {
      height: window.innerHeight
    },
    heading: {
      marginTop: 0,
      marginBottom: '25px',
      textAlign: 'center',
      fontFamily: 'Rozha One',
      fontWeight: 'initial',
    },
  }

ReactDOM.render(<Main />
,document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
