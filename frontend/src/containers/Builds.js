import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import background from '../media/images/buildsbg2.png';

const Builds = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            
            <div style={{ 
            backgroundImage: `url(${background})`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            // marginTop: '-50px'       
            }}>
                <div style={{display: 'flex', justifyContent: 'center',height: '90vh', color:'white', paddingTop:'25px'}}>
                    <h1>Currently Building</h1>
                </div>
            </div>
        </>
    )
}

export default Builds;