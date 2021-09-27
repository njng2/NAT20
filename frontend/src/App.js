import React from 'react';
import  { BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
                </Switch>
            </Layout>
        </Router>
    </Provider>
  )
}

export default App;
