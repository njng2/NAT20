import React from 'react';
import  { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

//Importing Containers
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Layout from './hocs/Layout';
import Dice from './containers/Dice';
import Library from './containers/Library';
import Builds from './containers/Builds';
import Chat from './containers/Chat';
import HeroStats from './containers/HeroStats';
import Classes from './containers/Classes';

const App = () => {
 
  return (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    {/* Home Route */}
                    <Route exact path='/' component={Home} /> 
                    {/* Log-in Route */}
                    <Route exact path='/login' component={Login} />
                    {/* Sign-up Route */}
                    <Route exact path='/signup' component={Signup} />
                    {/* Reset Password Route */}
                    <Route exact path='/reset-password' component={ResetPassword} />
                    {/* Reset Password Confirmation Route */}
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    {/* Activate Account Route */}
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                    {/* Dice Route */}
                    <Route exact path='/dice' component={Dice} />
                    {/* Builds Route */}
                    <Route exact path='/builds' component={Builds} />
                    {/* Libary Route */}
                    <Route exact path='/library' component={Library} />
                    {/* Chat Route */}
                    <Route exact path='/chat' component={Chat} />
                    {/* HeroStats Route */}
                    <Route exact path='/heroStats' component={HeroStats} />
                    {/* Ckasses Route */}
                    <Route exact path ='/classes' component = {Classes}/>
                </Switch>
            </Layout>
        </Router>
    </Provider>
  )
}

export default App;
