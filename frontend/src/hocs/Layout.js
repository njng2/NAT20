import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Dice from '../containers/Dice';
import Library from '../containers/Library';
import Builds from '../containers/Builds';

function Layout(){
    return (
        <Router>
            <Home />
        </Router>
    )
}
export default Layout;
