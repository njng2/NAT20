import React, { useState, useEffect } from "react";
// import Select from 'react-select';
// import { Button } from 'react-scroll';
import Axios from 'axios';
// import { get } from "react-scroll/modules/mixins/scroller";
import { BGContainer, ClassTitle, ClassSectionStyle, ClassTextBox} from './ClassesElements';


//Add the Components for the drop down elements here 
//Basically the CSS components

const ClassesSection = () => {

    const [classOptions, setClassOptions] = useState([]);

    const [selectedValue, setSelectedValue] = useState('none');
    const handleChange = e => {
        // console.log("testsdfsdf",e.target.data)
        setSelectedValue(e.target.value);
    }

    // get race api call
    const [allClasses, setAllClasses] = useState("");
    const getAllClasses = async () => {
        await Axios.get("https://www.dnd5eapi.co/api/classes").then(resp =>{
            console.log(resp.data.results)
            const options = resp.data.results.map((classes) => {
                return ({
                    value: classes.index,
                    label: classes.name
                })
            })
            setAllClasses(resp.data);
            setClassOptions(options);

        }).catch(err =>{
            console.error(err);
        });
    };
    
    //const newArr = allRaces.map()
    const [classes,setClasses] = useState("");
    const getClass = (label) =>{

        Axios.get(`https://www.dnd5eapi.co/api/classes/${label}`).then(resp =>{
            setClasses(resp.data);
        }).catch(err =>{
            console.error(err);
        })
        // console.log(selectedValue)
    };
    
    useEffect(() => {
        getAllClasses();
    }, [])

    useEffect( () =>{
        console.log(classOptions)
    },[classOptions])

    useEffect( () =>{
        console.log('Selected value', selectedValue)
        getClass(selectedValue);
    },[selectedValue])

   
    return (
    
        <BGContainer>
            <ClassTitle>
                <h1>Character Builder</h1>
                <ClassSectionStyle>
                    <br /><br />
                    <a style={{ color: 'white' }}>Class</a>

                    <select value={selectedValue} onChange={handleChange}>
                        <option value = 'none'> Select a class </option>
                        {classOptions.map((classes) => {
                            return(
                                <option value = {classes.value}>
                                    {classes.label}
                                </option>
                            )
                        })}
                    </select>

                    <br /><br />
                    {
                        //if selectedValue is not none, show all attributes
                        selectedValue !== 'none' ?  
                        <ClassTextBox>
                            <a><h3>Hit Die</h3>{classes.hit_die}</a> 


                        </ClassTextBox>
                        //else render nothing  
                        : null
                    }
                </ClassSectionStyle>
            </ClassTitle>
        </BGContainer>
    
    )
}
export default ClassesSection;
