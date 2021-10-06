import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
            <div style = {{overflow:'hidden',height:'90vh', paddingRight: '-10vh', paddingLeft: '-100vh', background: 'absolute', alignContent: 'center'}}>
            <div classname = "background-image" >
            <h1 style = {{color: '#FFFFFF', paddingLeft: '480px', textAlign: 'center', alignItems:'center', position: 'absolute'}}> "Welcome Adventurers!" </h1>
            <p>
            <img src="https://wallpaperaccess.com/full/117898.jpg"/>
            </p>
            </div>
            </div>
        </div>
            
        </>
    )
}

export default Home;
