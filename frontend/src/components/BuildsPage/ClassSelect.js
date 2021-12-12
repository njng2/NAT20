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



const ClassSelect = ({selectedClass, classes, classOptions, handleChange2,classProf,equipProf,classStatBonus}) => {
    const [value, setValue] = React.useState(0);
    const tabChange = (event, newValue) => {
        setValue(newValue);
  };
  console.log(classes);
  console.log("classprof",classProf);
  console.log("equipprof",equipProf);
  console.log("classstatebonus",classStatBonus);
  // document.getElementById('classprof2').innerHTML = classProf;
  // const Whatever = document.getElementById('classprof2').innerHTML;
  const EquipArray2 = equipProf.substr(0,equipProf.length-1)
  const EquipArray = EquipArray2.split("*")

  const IfteArray2 = classProf.substr(0,classProf.length-1)
  const IfteArray =  IfteArray2.split("*")

    return (
        <ClassTitle>
            <Container>
                <Box sx={{ flexGrow: 1,marginTop:10 }}>
                <Grid container spacing = {4}>
                <Grid item xs={6} columns={18}>
                </Grid>
                <Grid  item xs={1}>
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
            
           
                <Grid Grid item xs={6} alignItems="stretch">
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
                
                
                <br /><br />
                {
                    //if selectedValue is not none, show all attributes
                    selectedClass !== 'none' ?  
                    <ClassTextBox>
                        <Box sx={{ maxWidth: 480 }}>
                                    <Tabs
                                        value={value}
                                        onChange={tabChange}
                                        variant="scrollable"
                                        scrollButtons
                                        allowScrollButtonsMobile
                                        aria-label="scrollable auto tabs example"
                                        font ="font-family: Arial"
                                    >
                                        <Tab label="Stat Bonuses" {...a11yProps(0)} />
                                        <Tab label="Hit Die" {...a11yProps(1)} />
                                        <Tab label="Proficiences" {...a11yProps(2)} />
                                        <Tab label="Equipment Proficiencies" {...a11yProps(3)} />
                                    </Tabs>

                                    
                                    <TabPanel value={value} index={0}>
                                     <li>{classStatBonus.split("",3)}</li> 
                                     <li>{classStatBonus.slice(4,-1)}</li> 

                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                    {classes.hit_die}
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                    {IfteArray.map((item) => (<li>{item}</li>))}
                                    </TabPanel>
                                    <TabPanel value={value} index={3}>
                                   
                                    {EquipArray.map((item) => (<li>{item}</li>))}
                                    </TabPanel>
                                    </Box>
                    </ClassTextBox>
                    //else render nothing  
                    : null
                }
                </Grid>
                
                </Grid>
                </Box>
                
            </Container>
            {/* {
            document.getElementById('classprof2').innerHTML = classProf
            } */}
        </ClassTitle>
    )
}

export default ClassSelect;
