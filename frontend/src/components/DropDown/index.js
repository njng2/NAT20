import React, { useState, useEffect } from "react";
// import Select from 'react-select';
// import { Button } from 'react-scroll';
import { BackgroundContainer, BuildTitle, DropDownStyle, BuildGrid,RaceTextBox, RaceImageBox, GridContainer, } from './DropDownElements';
import { Link } from 'react-router-dom';
import Axios from 'axios';
// import { get } from "react-scroll/modules/mixins/scroller";
import imgMap from "../../media/raceImages";
//Add the Components for the drop down elements here 
//Basically the CSS components

const DropDown = () => {

    const [raceOptions, setRaceOptions] = useState([]);

    const [selectedValue, setSelectedValue] = useState('none');
    const handleChange = e => {
        // console.log("testsdfsdf",e.target.data)
        setSelectedValue(e.target.value);
    }

    // get race api call
    const [allRaces, setAllRaces] = useState("");
    const getAllRaces = async () => {
        await Axios.get("https://www.dnd5eapi.co/api/races").then(resp =>{
            console.log(resp.data.results)
            const options = resp.data.results.map((race) => {
                return ({
                    value: race.index,
                    label: race.name
                })
            })
            setAllRaces(resp.data);
            setRaceOptions(options);

        }).catch(err =>{
            console.error(err);
        });
    };
    
    //const newArr = allRaces.map()
    const [race,setRace] = useState("");
    const getRace = (label) =>{
        // console.log(allRaces);
        // console.log("tes:", label);
        Axios.get(`https://www.dnd5eapi.co/api/races/${label}`).then(resp =>{
            // console.log(resp);
            setRace(resp.data);
        }).catch(err =>{
            console.error(err);
        })
        // console.log(selectedValue)
    };
    
    useEffect(() => {
        getAllRaces();
    }, [])

    useEffect( () =>{
        console.log(raceOptions)
    },[raceOptions])

    useEffect( () =>{
        console.log('Selected value', selectedValue)
        getRace(selectedValue);
    },[selectedValue])

    console.log(race)
    return (
    
        <BackgroundContainer>
            <BuildTitle style>
                <h1>
                Character Builder
                <br /> 
                {
                    selectedValue != 'none'?
                    <RaceImageBox>
                    <img src={imgMap[race.index]}></img> 
                    </RaceImageBox>
                    : null
                }   
                </h1>
                
                <DropDownStyle>
                    <br /><br />
                    <a style={{ color: 'white' }}>Race</a>

                    <select value={selectedValue} onChange={handleChange}>
                        <option value = 'none'> Select a race </option>
                        {raceOptions.map((race) => {
                            return(
                                <option value={race.value}>
                                    {race.label}
                                </option>
                            )
                        })}
                    </select>

                    <Link to ="/classes"><button> Classes ⇨ </button></Link>
                    
                    <br /><br />
                    {
                        //if selectedValue is not none, show all attributes
                        
                        selectedValue !== 'none' ?  
                        <RaceTextBox>
                            {/* If name matches, image will render */}
                            <a> <h3>Alignment</h3>{race.alignment}</a>
                            <a> <h3>Age</h3>{race.age}</a>
                            <a><h3>Size</h3>{race.size}</a>
                            <a><h3>Speed</h3>{race.speed}</a>
                            <a><h3>Languages</h3>{race.language_desc}</a>
                        </RaceTextBox>
                        //else render nothing  
                        : null
                    }
                </DropDownStyle>
            </BuildTitle>
        </BackgroundContainer>
    
    )
}
export default DropDown
