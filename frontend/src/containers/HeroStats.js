import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Incrementor from '../components/Incrementor/Incrementor';
import styled from "styled-components";
import '../stats.css';


const min = 8;
const max = 15;

const HeroStats = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState(min)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <h1 className="HeroHeading">Point-Buy Calculator</h1>
            <div className="statsContainer">
                <div className="Holder">
                    <div className="Left">
                        <div className="Display">{value}</div>
                    </div>
                    <div className="Right">
                        <Incrementor
                        value = {value}
                        onChange = {(v) => setValue(v)} 
                        min={min} 
                        max={max} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroStats;