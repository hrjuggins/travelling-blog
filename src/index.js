import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import App from './App';
import Place from './pages/placePage';
import MapPage from './pages/Map'

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/map">
                        Map
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/place/:id' component={Place} />
                <Route path='/map' component={MapPage} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
