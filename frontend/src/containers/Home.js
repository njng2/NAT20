import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import BannerSection from '../components/BannerSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'

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
            <TwitterTimelineEmbed
                sourceType="profile"
                // The preferred screen name goes next: 
                screenName="Wizards_DnD"
                // Style options goes here:
                options={{ height: 600 }}
            />
        </>
    )
}

export default Home;
