import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { checkAuthenticated, load_user} from '../actions/auth';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Home from '../containers/Home';
// import Login from '../containers/Login';
// import Dice from '../containers/Dice';
// import Library from '../containers/Library';
// import Builds from '../containers/Builds';
// import Signup from '../containers/Signup';
// import Chat from '../containers/Chat';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Layout = (props) =>{
    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
        // console.log("Props from Layout.js", props);
    }, []);

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        // <Router>
        //     <Switch>
        //             {/* Home Route */}
        //             <Route exact path='/' component={Home} /> 
        //             {/* Log-in Route */}
        //             <Route exact path='/login' component={Login} />
        //             {/* Dice Route */}
        //             <Route exact path='/dice' component={Dice} />
        //             {/* Builds Route */}
        //             <Route exact path='/builds' component={Builds} />
        //              {/* Libary Route */}
        //             <Route exact path='/library' component={Library} />

        //             <Route exact path='/signup' component={Signup} />

        //             <Route exact path='/chat' component={Chat} />

        //     </Switch>
        // </Router>
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} load_user={load_user}/>
            {props.children}
            <Footer />
        </div>
    )
}
export default connect(null, { checkAuthenticated, load_user })(Layout);
