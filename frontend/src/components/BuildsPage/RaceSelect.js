import React from 'react';
import imgMap from "../../media/raceImages";
import { 
    BuildTitle,
    DropDownStyle, 
    RaceTextBox, 
    RaceImageBox
 } from './BuildsElements';
import { Container, Grid,Paper } from '@mui/material';
import { Box, grid } from '@mui/system';

const RaceSelect = ({selectedRace, handleChange, race, raceOptions}) => {
    return (
        <BuildTitle style>
            <Container>
                <Box sx={{ flexGrow: 1,marginTop:10 }}>
                    <Grid container spacing = {10} alignItems="stretch">
                    <Grid item xs={5} columns={18}> 

                    </Grid>
                    <Grid item xs={2}>
                    <h1>
                    {
                        selectedRace != 'none'?
                        <RaceImageBox>
                        <img src={imgMap[race.index]}></img> 
                        </RaceImageBox>
                        : null
                    }   
                    </h1>
                    </Grid>

                    
                    <DropDownStyle>
                        <Grid item xs={6}>
                        <br /><br />
                        <a style={{ color: 'white' }}>Race</a>

                        <select value={selectedRace} onChange={handleChange}>
                            <option value = 'none'> Select a race </option>
                            {raceOptions.map((race) => {
                                return(
                                    <option value={race.value}>
                                        {race.label}
                                    </option>
                                )
                            })}
                        </select>

                    
                        
                        <br /><br />
                        {
                            //if selectedValue is not none, show all attributes
                            
                            selectedRace !== 'none' ?  
                            <RaceTextBox>
                                {/* If name matches, image will render */}
                                <a> <h3>Alignment</h3>{race.alignment}</a>
                                <a> <h3>Age</h3>{race.age}</a>
                                <a><h3>Size</h3>{race.size}</a>
                                <a><h3>Size Description</h3>{race.size_description}</a>
                                <a><h3>Speed</h3>{race.speed}</a>
                                <a><h3>Languages</h3>{race.language_desc}</a>
                            </RaceTextBox>
                            //else render nothing  
                            : null
                        }
                        </Grid>
                    </DropDownStyle>
                    </Grid>
                </Box>
            </Container>
        </BuildTitle>
    )
}

export default RaceSelect;
