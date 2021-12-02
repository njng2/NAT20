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
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }

    
    


const RaceSelect = ({selectedRace, handleChange, race, raceOptions}) => {
const [value, setValue] = React.useState(0);

const tabChange = (event, newValue) => {
      setValue(newValue);
};
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
                                <Box sx={{ maxWidth: 480 }}>
                                    <Tabs
                                        value={value}
                                        onChange={tabChange}
                                        variant="scrollable"
                                        scrollButtons
                                        allowScrollButtonsMobile
                                        aria-label="scrollable auto tabs example"
                                    >
                                        <Tab label="Alignment" {...a11yProps(0)} />
                                        <Tab label="Age" {...a11yProps(1)} />
                                        <Tab label="Size" {...a11yProps(2)} />
                                        <Tab label="Size Description" {...a11yProps(3)} />
                                        <Tab label="Speed" {...a11yProps(4)} />
                                        <Tab label="Languages" {...a11yProps(5)} />
                                    </Tabs>

                                    <TabPanel value={value} index={0}>
                                    {race.alignment}
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                    {race.age}
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                    {race.size}
                                    </TabPanel>
                                    <TabPanel value={value} index={3}>
                                    {race.size_description}
                                    </TabPanel>
                                    <TabPanel value={value} index={4}>
                                    {race.language_desc}
                                    </TabPanel>
                                    <TabPanel value={value} index={5}>
                                        Item Six
                                    </TabPanel>
                                    </Box>
                                {/* If name matches, image will render */}
                                
                                {/* <a><h3>Alignment</h3>{race.alignment}</a>
                                <a><h3>Age</h3>{race.age}</a>
                                <a><h3>Size</h3>{race.size}</a>
                                <a><h3>Size Description</h3>{race.size_description}</a>
                                <a><h3>Speed</h3>{race.speed}</a>
                                <a><h3>Languages</h3>{race.language_desc}</a> */}
                                
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
