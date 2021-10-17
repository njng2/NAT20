import React, { useState } from "react";
import Select from 'react-select';
import { Button } from 'react-scroll';
import { BackgroundContainer, BuildTitle, DropDownStyle } from './DropDownElements';
//Add the Components for the drop down elements here 
//Basically the CSS components

const DropDown = () => {
    const data = [
        {value: 1, label: "Dragonborn"},{ value: 2,label: "Dwarf"},{value: 3,label: "Elf"},
        {value: 4,label: "Genassi"},{value: 5,label: "Grung"},{value: 6,label: "Locathah"}
      ];
   
    const [selectedValue, setSelectedValue] = useState(0);
    const handleChange = e => {
        setSelectedValue(e.value);
    }

    return(
        <BackgroundContainer>
           <BuildTitle>
            <h1>Character Builder</h1>
            <DropDownStyle>
            <br /><br />
            <a style = {{color: 'white'}}>Race</a>

            <Select
                placeholder="Select"
                value = {data.find(obj => obj.value === selectedValue)} // set selected value
                options = {data} // set list of the data
                onChange = {handleChange} // assign onChange function
            />

            <br /><br />
                </DropDownStyle>
           </BuildTitle>
        </BackgroundContainer>
    )
}
export default DropDown
