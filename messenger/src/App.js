import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './modules/header.js';
import Home from './modules/home';
import Users from './modules/users';
import Profile from './modules/users/profile';
import Feed from './modules/feed';
import './App.sass';

const history = createBrowserHistory();

export default class App extends React.Component {

    render() {
        return (

                <Router history={ history }>
                    <Header />
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/users" exact component={Users} />
                      <Route path="/users/:id" exact component={Profile} />
                      <Route path="/feed" exact component={Feed} />
                    </Switch>
                </Router>


        );
    }
}
