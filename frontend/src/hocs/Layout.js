import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Dice from '../containers/Dice';
import Library from '../containers/Library';
import Builds from '../containers/Builds';
import Navbar from '../components/Navbar';

function Layout(){
    return (
        <Router>
            <Switch>
                    {/* Home Route */}
                    <Route exact path='/' component={Home} /> 
                    {/* Log-in Route */}
                    <Route exact path='/login' component={Login} />
                    {/* Dice Route */}
                    <Route exact path='/dice' component={Dice} />
                    {/* Builds Route */}
                    <Route exact path='/builds' component={Builds} />
                     {/* Libary Route */}
                    <Route exact path='/library' component={Library} />

            </Switch>
        </Router>
    )
}
export default Layout;
