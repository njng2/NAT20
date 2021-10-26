import React, {useState} from 'react';

import BannerSection from '../components/BannerSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import TwitchSection from '../components/TwitchWidget';
import { homeObjTwo } from '../components/TwitchWidget/Data';


const Home = () => {


    return (
        <>
        
            <BannerSection />
            <InfoSection {...homeObjOne}/>
            <TwitchSection {...homeObjTwo}/>
        </>
    )
}

export default Home;
