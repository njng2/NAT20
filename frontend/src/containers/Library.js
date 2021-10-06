import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dice from './Dice';
const Library = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Switch>
                <Route exact path = "/dice" component={Dice}/>
            </Switch>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Library</h1>
            </div>
        </>
    )
}

export default Library;