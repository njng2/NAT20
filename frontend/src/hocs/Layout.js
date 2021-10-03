import React from 'react';
//import { Router } from 'react-router';
import Navbar from '../components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Dice from '../containers/Dice';

function Layout(){
    return (
        <Router>
            <Navbar />
            <Switch>
                    {/* Home Route */}
                    <Route exact path='/' component={Home} /> 
                    {/* Log-in Route */}
                    <Route exact path='/login' component={Login} />
                    {/* Sign-up Route */}
                    <Route exact path='/dice' component={Dice} />
                    {/* Reset Password Route */}
                    {/*TODO: Add Route for Builds and Library */}
            </Switch>
        </Router>
    )
}
export default Layout;
