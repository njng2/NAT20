import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Library from '../containers/Library';
import Builds from '../containers/Builds';
import Signup from '../containers/Signup';
import Chat from '../containers/Chat';
import HeroStats from '../containers/HeroStats';

function Layout(){
    return (
        <Router>
            <Switch>
                    {/* Home Route */}
                    <Route exact path='/' component={Home} /> 
                    {/* Log-in Route */}
                    <Route exact path='/login' component={Login} />
                    {/* Builds Route */}
                    <Route exact path='/builds' component={Builds} />
                     {/* Libary Route */}
                    <Route exact path='/library' component={Library} />

                    <Route exact path='/signup' component={Signup} />

                    <Route exact path='/chat' component={Chat} />

                    <Route exact path='/heroStats' component={HeroStats} />

            </Switch>
        </Router>
    )
}
export default Layout;
