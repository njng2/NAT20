import React from 'react';
//import { Router } from 'react-router';
import Navbar from '../components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function Layout(){
    return (
        <Router>
            <Navbar />
        </Router>
    )
}
export default Layout;
