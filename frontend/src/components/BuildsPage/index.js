import Axios from 'axios';
import React, { useState, useEffect } from "react";
import ClassImageMap from "../../media/classImages";
import imgMap from "../../media/raceImages";
import Incrementor from '../Incrementor/Inc';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './stats.css';
import { 
    BackgroundContainer, 
    BuildTitle, 
    DropDownStyle, 
} from './BuildsElements';

import RaceSelect from './RaceSelect';
import ClassSelect from './ClassSelect';
import StatCalc from './StatCalc';
import store from '../../store';
import { Container, Grid,Paper } from '@mui/material';
import { Box, grid } from '@mui/system';
import { IconButton,Collapse} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@mui/material';

const min = 8;
const max = 15;
const totalPoints = 27;

const BuildsPage = (props) => {
    const [open, setOpen] = React.useState(false);

    //*************************************************/
    //Pushed to the API
    //Name
    const [name, setName] = useState("");
    //Race Type
    const [selectedRace, setSelectedRace] = useState('none');
    //Class Type
    const [selectedClass, setSelectedClass] = useState('none');
    //Stats
    const [valueStr, setStrValue] = useState(min);
    const [valueDex, setDexValue] = useState(min);
    const [valueCon, setConValue] = useState(min);
    const [valueInt, setIntValue] = useState(min);
    const [valueWis, setWisValue] = useState(min);
    const [valueCha, setChaValue] = useState(min);
    const [heroId, setHeroId] = useState(0);
    const storeState = store.getState();
    const userId = storeState.auth.user.id;
    //*********************   End of push API ****************************/
    // console.log("Here is the store stuff:", user);


    //********************************************************** */
    //Stats Page JS
    const[StrCount, setStrCounter] = useState(0)
    const[DexCount, setDexCounter] = useState(0)
    const[ConCount, setConCounter] = useState(0)
    const[IntCount, setIntCounter] = useState(0)
    const[WisCount, setWisCounter] = useState(0)
    const[ChaCount, setChaCounter] = useState(0)
    
    const[availablePoints, trackAvailablePoints] = useState(27)
    const[usedPoints, trackUsedPoints] = useState(0)
    //************************************************************ */

    //onSubmit function
    const onSubmit = (e) => {
        e.preventDefault();
        // RESET VALUES
        setOpen(true);
        setName("");
        setSelectedRace('none');
        setSelectedClass('none');
        setStrValue(min);
        setDexValue(min);
        setConValue(min);
        setIntValue(min);
        setWisValue(min);
        setChaValue(min);
        setStrCounter(0);
        setDexCounter(0);
        setConCounter(0);
        setIntCounter(0);
        setWisCounter(0);
        setChaCounter(0);
        trackAvailablePoints(27);
        trackUsedPoints(0);
        // end of reset
        const postData = {
            name,
            race_type: selectedRace,
            class_type: selectedClass,
            STR: valueStr,
            DEX: valueDex,
            CON: valueCon,
            INT: valueInt,
            WIS: valueWis,
            CHA: valueCha,
            hero: userId
        };

        Axios.post(`${process.env.REACT_APP_API_URL}/heroes/`,
        postData, )
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error( err ) ;
        });

    }
    //*************************************************/


    const [raceOptions, setRaceOptions] = useState([]);
    
    const handleChange = e => {
        // console.log("testsdfsdf",e.target.data)
        setSelectedRace(e.target.value);
        setOpen(false);
    }
    
    // get race api call
    const [allRaces, setAllRaces] = useState("");
    const getAllRaces = async () => {
        //console.log("Here are props: ", props);
        await Axios.get("https://www.dnd5eapi.co/api/races").then(resp =>{
            // console.log(resp.data.results)
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
        // console.log("Here is the store stuff:", user);
    }, [])

    useEffect( () =>{
        console.log(raceOptions)
    },[raceOptions])

    useEffect( () =>{
        console.log('Selected value', selectedRace)
        getRace(selectedRace);
    },[selectedRace])

    //***************************** Classes JS below ***************************** */

    const [classOptions, setClassOptions] = useState([]);

    const handleChange2 = e => {
        // console.log("testsdfsdf",e.target.data)
        setSelectedClass(e.target.value);
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

            //makes the list for skill proficiencies
            let html = '';
            (resp.data.proficiency_choices[0].from).forEach(function(prof) {
                html+= '<li>' + prof.index;
            });
            html = '<ul>' + html +'<ul>'
            // console.log(html)
            document.querySelector('#profChoices').innerHTML = html;
            //end of skill proficiency code

            //make list for the equipment proficiencies
            let html2 = '';
            (resp.data.proficiencies).forEach(function(prof) {
                html2+= '<li>' + prof.index;
            });
            html2 = '<ul>' + html2 +'<ul>'
            // console.log(html2)
            document.querySelector('#equipChoices').innerHTML = html2;
            //end of equipment proficiencies

            //make list for stat bonus
            let html3 = '';
            (resp.data.saving_throws).forEach(function(bonus) {
                html3+= '<li>' + bonus.name;
            });
            html3 = '<ul>' + html3 +'<ul>'
            // console.log(html3)
            document.querySelector('#statBonus').innerHTML = html3;
            //end of stat bonus
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
        console.log('Selected value', selectedClass)
        getClass(selectedClass);
    },[selectedClass])

    // console.log(classes)

    return (
    
        <BackgroundContainer>

            {/* race options */}
            <RaceSelect 
                selectedRace={selectedRace} 
                handleChange={handleChange} 
                race={race} 
                raceOptions={raceOptions}
            />

            {/* class options */}
            <ClassSelect 
                selectedClass={selectedClass} 
                classes={classes}
                classOptions={classOptions} 
                handleChange2={handleChange2}
            />

            {/* Stat Calculator */}
           <StatCalc 
                usedPoints={usedPoints}
                availablePoints={availablePoints} 
                totalPoints={totalPoints}
                trackUsedPoints={trackUsedPoints}
                trackAvailablePoints={trackAvailablePoints}
                min={min} 
                max={max} 
                valueStr={valueStr}
                valueDex={valueDex}
                valueCon={valueCon}
                valueInt={valueInt}
                valueWis={valueWis}
                valueCha={valueCha}
                StrCount={StrCount}
                setStrValue={setStrValue}
                setStrCounter={setStrCounter}
                DexCount={DexCount}
                setDexValue={setDexValue}
                setDexCounter={setDexCounter}
                ConCount={ConCount}
                setConValue={setConValue}
                setConCounter={setConCounter}
                IntCount={IntCount}
                setIntValue={setIntValue}
                setIntCounter={setIntCounter}
                WisCount={WisCount}
                setWisValue={setWisValue}
                setWisCounter={setWisCounter}
                ChaCount={ChaCount}
                setChaValue={setChaValue}
                setChaCounter={setChaCounter}
            />
    
            <Container>
                <Box sx={{ flexGrow: 1,marginTop:10 }}>
                    <Grid container spacing={3} columns={18}>
                        <Grid item xs={6}> 
                            
                        </Grid>

                        <Grid item xs={6}> 
                            <Box sx={{ width: '100%' }}>
                                <Collapse in={open}>
                                    <Alert
                                        severity="success"
                                        action={
                                            <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                            >
                                            <CloseIcon fontSize="inherit" />
                                            </IconButton>
                                        }
                                        sx={{ mb: 2 }}
                                    >
                                        Character was saved successfully!!!
                                    </Alert>
                                </Collapse>
                            </Box>

                            <TextField
                                value={name}
                                label="Enter your name"
                                style={{backgroundColor: 'white', color: '#FFFFFF'}}
                                onChange={(e) => {
                                setName(e.target.value);
                                // console.log(name);
                                }}
                                variant="filled"
                            /> 
                            {
                                name === "" || selectedRace === 'none' || selectedClass === 'none' ?
                            <Button 
                                variant="contained" 
                                disabled 
                                // style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                            >
                                Save Build
                            </Button>
                            :
                            <Button 
                                variant="contained" 
                                onClick={onSubmit}
                                // style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                            >
                                Save Build
                            </Button>
                            }
                        </Grid>

                        <Grid item xs={6}> 
                            
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
        </BackgroundContainer>
    )
}
export default BuildsPage
