import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import BannerSection from '../components/BannerSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import TwitchSection from '../components/TwitchWidget';
import { homeObjTwo } from '../components/TwitchWidget/Data';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <BannerSection />
            <InfoSection {...homeObjOne}/>
            <TwitchSection {...homeObjTwo}/>
        </>
    )
}

export default Home;
