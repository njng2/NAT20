import React from 'react';

import { Container, Grid } from '@mui/material';
import { Box} from '@mui/system';
import ClassImageMap from "../../media/classImages";
import { 
    ClassTitle, 
    ClassSectionStyle, 
    ClassTextBox, 
    ClassImageBox, 
} from './BuildsElements';

const ClassSelect = ({selectedClass, classes, classOptions, handleChange2}) => {
    return (
        <ClassTitle>
            <Container>
                <Box sx={{ flexGrow: 1,marginTop:10 }}>
                <Grid container spacing = {3}>
                <Grid item xs={2} columns={18}>
                </Grid>
                <Grid  item xs={2}>
                <h1>
                {
                    selectedClass !== 'none' ?
                    <ClassImageBox>
                    <img src={ClassImageMap[classes.index]}></img> 
                    </ClassImageBox>
                    : null
                }
            </h1>
            </Grid>
            
            <ClassSectionStyle>
                <Grid Grid item xs={6}>
                <br /><br />
                <a style={{ color: 'white' }}>Class</a>

                <select value={selectedClass} onChange={handleChange2}>
                    <option value = 'none'> Select a class </option>
                    {classOptions.map((classes) => {
                        return(
                            <option value = {classes.value}>
                                {classes.label}
                            </option>
                        )
                    })}
                </select>
                
                {/* <Link to ="/heroStats"><button> Hero Stats ⇨</button></Link>
                <Link to ="/builds"><button>⇦ Builds </button></Link> */}
                <br /><br />
                {
                    //if selectedValue is not none, show all attributes
                    selectedClass !== 'none' ?  
                    <ClassTextBox>
                        <a><h3>Stat Bonuses</h3></a>
                        <div id="statBonus"> </div>
                        <a><h3>Hit Die</h3>{classes.hit_die}</a> 
                        {/* /div holds the chocies for profs/ */}
                        <a><h3>Skill Proficiencies</h3></a> 
                        <div id="profChoices"></div>
                        <a><h3>Equipment Proficiencies</h3></a>
                        <div id="equipChoices"></div>
                    </ClassTextBox>
                    //else render nothing  
                    : null
                }
                </Grid>
                </ClassSectionStyle>
                </Grid>
                </Box>
            </Container>
        </ClassTitle>
    )
}

export default ClassSelect;
