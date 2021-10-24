import React, { useState, useEffect } from "react";
import Select from 'react-select';
import { Button } from 'react-scroll';
import { BackgroundContainer, BuildTitle, DropDownStyle, BuildGrid,RaceTextBox } from './DropDownElements';
import Axios from 'axios';
import { get } from "react-scroll/modules/mixins/scroller";

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

   
    return (
    
        <BackgroundContainer>
            <BuildTitle>
                <h1>Character Builder</h1>
                <BuildGrid>
                <DropDownStyle>
                    <br /><br />
                    <a style={{ color: 'white' }}>Race</a>

                    <select value={selectedValue} onChange={handleChange}>
                        <option value='none'> Select a race </option>
                        {raceOptions.map((race) => {
                            return(
                                <option value={race.value}>
                                    {race.label}
                                </option>
                            )
                        })}
                    </select>

                    <br /><br />
                    <RaceTextBox>
                        <h3>Alignment</h3>
                        <a>{race.alignment}</a>
                        <h3>Age</h3>
                        <a>{race.age}</a>
                        <h3>Size</h3>
                        <a>{race.size}</a>
                        <h3>Speed</h3>
                        <a>{race.speed}</a>
                        <h3>Languages</h3>
                        <a>{race.language_desc}</a>
                        
                    </RaceTextBox>
                    
                </DropDownStyle>
                </BuildGrid>
            </BuildTitle>
        </BackgroundContainer>
    
    )
}
export default DropDown
