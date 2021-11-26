import Axios from 'axios';
import React, { useState, useEffect } from "react";
import ClassImageMap from "../../media/classImages";
import imgMap from "../../media/raceImages";
import Incrementor from '../Incrementor/Inc';
import './stats.css';
import { 
    BackgroundContainer, 
    ClassTitle, 
    ClassSectionStyle, 
    ClassTextBox, 
    ClassImageBox,
    BuildTitle, 
    DropDownStyle, 
    RaceTextBox, 
    RaceImageBox
} from './BuildsElements';

const min = 8;
const max = 15;
const totalPoints = 27;

const BuildsPage = () => {

    const [raceOptions, setRaceOptions] = useState([]);

    const [selectedRace, setSelectedRace] = useState('none');
    const handleChange = e => {
        // console.log("testsdfsdf",e.target.data)
        setSelectedRace(e.target.value);
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
        console.log('Selected value', selectedRace)
        getRace(selectedRace);
    },[selectedRace])

    //***************************** Classes JS below ***************************** */

    const [classOptions, setClassOptions] = useState([]);

    const [selectedValue, setSelectedValue] = useState('none');
    const handleChange2 = e => {
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

            //makes the list for skill proficiencies
            let html = '';
            (resp.data.proficiency_choices[0].from).forEach(function(prof) {
                html+= '<li>' + prof.index;
            });
            html = '<ul>' + html +'<ul>'
            console.log(html)
            document.querySelector('#profChoices').innerHTML = html;
            //end of skill proficiency code

            //make list for the equipment proficiencies
            let html2 = '';
            (resp.data.proficiencies).forEach(function(prof) {
                html2+= '<li>' + prof.index;
            });
            html2 = '<ul>' + html2 +'<ul>'
            console.log(html2)
            document.querySelector('#equipChoices').innerHTML = html2;
            //end of equipment proficiencies

            //make list for stat bonus
            let html3 = '';
            (resp.data.saving_throws).forEach(function(bonus) {
                html3+= '<li>' + bonus.name;
            });
            html3 = '<ul>' + html3 +'<ul>'
            console.log(html3)
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
        console.log('Selected value', selectedValue)
        getClass(selectedValue);
    },[selectedValue])

    console.log(classes)
    //********************************************************** */
    //Stats Page JS

    const [valueStr, setStrValue] = useState(min)
    const [valueDex, setDexValue] = useState(min)
    const [valueCon, setConValue] = useState(min)
    const [valueInt, setIntValue] = useState(min)
    const [valueWis, setWisValue] = useState(min)
    const [valueCha, setChaValue] = useState(min)
    
    const[StrCount, setStrCounter] = useState(0)
    const[DexCount, setDexCounter] = useState(0)
    const[ConCount, setConCounter] = useState(0)
    const[IntCount, setIntCounter] = useState(0)
    const[WisCount, setWisCounter] = useState(0)
    const[ChaCount, setChaCounter] = useState(0)


    const[StrModCount, setStrModCounter] = useState(-1)
    const[DexModCount, setDexModCounter] = useState(-1)
    const[ConModCount, setConModCounter] = useState(-1)
    const[IntModCount, setIntModCounter] = useState(-1)
    const[WisModCount, setWisModCounter] = useState(-1)
    const[ChaModCount, setChaModCounter] = useState(-1)
    


    const[availablePoints, trackAvailablePoints] = useState(27)
    const[usedPoints, trackUsedPoints] = useState(0)


    //************************************************************ */

    return (
    
        <BackgroundContainer>
            <BuildTitle style>
                <h1>
                Character Race
                <br /> 
                {
                    selectedRace != 'none'?
                    <RaceImageBox>
                    <img src={imgMap[race.index]}></img> 
                    </RaceImageBox>
                    : null
                }   
                </h1>
                
                <DropDownStyle>
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

                    {/* <Link to ="/classes"><button> Classes ⇨ </button></Link> */}
                    
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
                </DropDownStyle>
            </BuildTitle>
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />

            {/*  Classes containers below*/}
            <ClassTitle>
                <h1>
                    Character Class
                    {
                        selectedValue !== 'none' ?
                        <ClassImageBox>
                        <img src={ClassImageMap[classes.index]}></img> 
                        </ClassImageBox>
                        : null
                    }
                </h1>
                
                <ClassSectionStyle>
                    <br /><br />
                    <a style={{ color: 'white' }}>Class</a>

                    <select value={selectedValue} onChange={handleChange2}>
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
                        selectedValue !== 'none' ?  
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
                </ClassSectionStyle>
            </ClassTitle>
            {/* END of CLASSES */}
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
        {/* ADDING STATS CALC STUFF HERE */}
        <h1 style={{textAlign: "center"}}>Point-Buy Calculator</h1>

            <body id="stats-body">
                <table id = "point-buy" style={{width: "100%"}}>
                    <tbody>
                        <tr class = "stats-header">
                            <th></th>
                            <th>Base</th>
                            <th class="operator"></th>
                            <th></th>
                            <th class="operator"></th>
                            <th>Finalscore</th>
                            <th></th>
                            <th>Mod</th>
                            <th></th>
                            <th>Cost</th>
                        </tr>
                        <tr id="str" class="stats-row">
                            <th>STR</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueStr}
                                    Counter = {StrCount}
                                    Mod = {StrModCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints} 
                                    onChange = {
                                        (v,count, points, trackpoints, modpoints) => {
    
                                            
                                            if(usedPoints >=0 && usedPoints<=27){
                                                setStrValue(v);
                                                setStrCounter(count);
                                                trackUsedPoints(trackpoints);
                                                trackAvailablePoints(points);
                                                if (StrCount % 2 ===0 && StrCount>0){
                                                    setStrModCounter(modpoints);
                                                    // if(StrCount <=15 && StrCount%2 ===0 ){
                                                    //     setStrModCounter(modpoints);
    
                                                    // }  
                                                    
    
                                                }
            



                                            }
                                            // if (StrCount % 2 ===0 && StrCount>0){
                                            //     setStrModCounter(modpoints);
                                            //     // if(StrCount <=15 && StrCount%2 ===0 ){
                                            //     //     setStrModCounter(modpoints);

                                            //     // }  
                                                

                                            // }



                                            

                                        
                                            
                                           
                                            
                                           

                                            
                                           

                                            // if(availablePoints<0){
                                            //     alert("All 27 points used")
                                            //     trackAvailablePoints(points+1)
                                            // }
                                            // else{
                                            //     trackAvailablePoints(points)
                                            
    
                                            // }
                                            
                                        }
                                    } 
                                    min={min} 
                                    max={max} />

                                </div>
                            </td>
                            <td class="race-mod">
                                RM
                            </td>
                            <td className="Left">
                                    <td className="Display">{valueStr}</td>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{StrModCount}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                {StrCount}
                            </td>
                        </tr>
                        <tr id="dex" class="stats-row">
                            <th>DEX</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueDex}
                                    Counter ={DexCount}
                                    availPoints = {availablePoints}
                                    Mod = {DexModCount}
                                    CurrentPoints = {usedPoints}
                                    onChange = {
                                        (v, count, points, trackpoints, modpoints) => {

                                            if(usedPoints >=0 && usedPoints<=27){
                                                setDexValue(v)
                                                setDexCounter(count)
                                                trackUsedPoints(trackpoints);
                                                trackAvailablePoints(points);
                                                if (DexCount%2===0 && DexCount >0 ){
                                                    setDexModCounter(modpoints);
                                                    // if(DexCount% 2 ===0){
                                                    //     setDexModCounter(modpoints);
    
                                                    // }
                                                
                                                }


        
                                            }
                                            // if (DexCount%2===0 && DexCount >0 ){
                                            //     setDexModCounter(modpoints);
                                            //     // if(DexCount% 2 ===0){
                                            //     //     setDexModCounter(modpoints);

                                            //     // }
                                            
                                            // }




                                      

                                        // if(availablePoints<0){
                                        //     alert("All 27 points used")
                                        //     trackAvailablePoints(points+1)
                                        // }
                                        // else{
                                        //     trackAvailablePoints(points)
                                        

                                        // }
                                        

                                    
                                    }} 
                                    min={min} 
                                    max={max}
                                    />
                                </div>
                            </td>
                            <td className="race-mod">
                                RM
                            </td>
                            <td className="Left">
                                    <div className="Display">{valueDex}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{DexModCount}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>
                                    {DexCount}

                                </div>
                            </td>
                        </tr>
                        <tr id="con" class="stats-row">
                            <th>CON</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueCon}
                                    Counter = {ConCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints}
                                    Mod = {ConModCount}
                                    onChange = {(v,count, points, trackpoints, modpoints) => {
                                        if(usedPoints >=0 && usedPoints<=27){
                                            setConCounter(count)
                                            setConValue(v)

                                            trackUsedPoints(trackpoints);
                                            trackAvailablePoints(points);

                                            if (ConCount % 2 ===0 && ConCount > 0){
                                                setConModCounter(modpoints);
                                                // if(ConCount%2 ===0){
                                                //     setConModCounter(modpoints);

                                                // }
                                                

                                            

                                            }


                                                                                  

                                        }

                                        // if (ConCount % 2 ===0 && ConCount > 0){
                                        //     setConModCounter(modpoints);
                                        //     // if(ConCount%2 ===0){
                                        //     //     setConModCounter(modpoints);

                                        //     // }
                                            

                                           

                                        // }

                                        // if(availablePoints<0){
                                        //     alert("All 27 points used")
                                        //     trackAvailablePoints(points+1)
                                        // }
                                        // else{
                                        //     trackAvailablePoints(points)
                                        

                                        // }

                                    }} 
                                    min={min} 
                                    max={max} />
                                </div>
                            </td>
                            <td className="race-mod">
                                RM
                            </td>
                            <td className="Left">
                                    <div className="Display">{valueCon}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{ConModCount}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{ConCount}</div>
                            </td>
                        </tr>
                        <tr id="int" class="stats-row">
                            <th>INT</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueInt}
                                    Counter = {IntCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints}
                                    Mod = {IntModCount}
                                    onChange = {(v,count, points, trackpoints, modpoints) => {
                                        if(usedPoints >=0 && usedPoints<=27){
                                            setIntValue(v);

                                            setIntCounter(count);

                                            trackUsedPoints(trackpoints);
                                            trackAvailablePoints(points);
                                            if (IntCount % 2 ===0 && IntCount>0 ){
                                                setIntModCounter(modpoints);
                                                // if (IntCount% 2 ===0){
                                                //     setIntModCounter(modpoints);
    
                                                // }
                                                
    
                                            }



                                        }
                                        // if (IntCount % 2 ===0 && IntCount>0 ){
                                        //     setIntModCounter(modpoints);
                                        //     // if (IntCount% 2 ===0){
                                        //     //     setIntModCounter(modpoints);

                                        //     // }
                                            

                                        // }




                                        // if(availablePoints<0){
                                        //     alert("All 27 points used")
                                        //     trackAvailablePoints(points+1)
                                        // }
                                        // else{
                                        //     trackAvailablePoints(points)
                                        

                                        // }
                                       
                                    
                                    }} 
                                    min={min} 
                                    max={max} />
                                </div>
                            </td>
                            <td className="race-mod">
                                RM
                            </td>
                            <td className="Left">
                                    <div className="Display">{valueInt}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{IntModCount}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{IntCount}</div>
                            </td>
                        </tr>
                        <tr id="wis" class="stats-row">
                            <th>WIS</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueWis}
                                    Counter = {WisCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints}
                                    Mod = {WisModCount}
                                    onChange = {(v,count, points, trackpoints, modpoints) => {
                                        if(usedPoints >=0 && usedPoints<=27){
                                            setWisValue(v);
                                            setWisCounter(count);

                                            trackUsedPoints(trackpoints);
                                            trackAvailablePoints(points);
                                            if(WisCount % 2 ===0 && WisCount>0){
                                                setWisModCounter(modpoints);
                                                // if(WisCount% 2 ===0){
                                                //     setWisModCounter(modpoints);
    
                                                // }
    
    
                                            }



                                        }
                                        // if(WisCount % 2 ===0 && WisCount>0){
                                        //     setWisModCounter(modpoints);
                                        //     // if(WisCount% 2 ===0){
                                        //     //     setWisModCounter(modpoints);

                                        //     // }


                                        // }


                                      


                                        // if(availablePoints<0){
                                        //     alert("All 27 points used")
                                        //     trackAvailablePoints(points+1)
                                        // }
                                        // else{
                                        //     trackAvailablePoints(points)
                                        

                                        // }
                                        
                                    }}
                                    min={min} 
                                    max={max} />
                                </div>
                            </td>
                            <td className="race-mod">
                                RM
                            </td>
                            <td className="Left">
                                    <div className="Display">{valueWis}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{WisModCount}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{WisCount}</div>
                            </td>
                        </tr>
                        <tr id="cha" class="stats-row">
                            <th>CHA</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueCha}
                                    Counter = {ChaCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints}
                                    Mod = {ChaModCount}
                                    onChange = {(v,count, points, trackpoints, modpoints) => {
                                        if(usedPoints >=0 && usedPoints<=27){
                                            setChaValue(v);
                                            setChaCounter(count);

                                            trackUsedPoints(trackpoints);
                                            trackAvailablePoints(points);
                                            if (ChaCount % 2 ===0 && ChaCount>0){
                                                setChaModCounter(modpoints);
                                                // if (ChaCount <=15 && ChaCount% 2 ===0 ){
                                                //     setChaModCounter(modpoints);
    
                                                // }
                                                
    
                                            }



                                        }
                                        // if (ChaCount % 2 ===0 && ChaCount>0){
                                        //     setChaModCounter(modpoints);
                                        //     // if (ChaCount <=15 && ChaCount% 2 ===0 ){
                                        //     //     setChaModCounter(modpoints);

                                        //     // }
                                            

                                        // }




                                        // if(availablePoints<0){
                                        //     alert("All 27 points used")
                                        //     trackAvailablePoints(points+1)
                                        // }
                                        // else{
                                        //     trackAvailablePoints(points)
                                        

                                        // }



                                    
                                    
                                    }} 
                                    min={min} 
                                    max={max} />
                                </div>
                            </td>
                            <td className="race-mod">
                                RM
                            </td>
                            <td className="Left">
                                    <div className="Display">{valueCha}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{ChaModCount}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>
                                    {ChaCount}
                                </div>
                                <div> 


                                </div>
                            </td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </table>
                <div>
                <label> Total Points:{totalPoints}</label> <br/ >
                <label> Available Points:{availablePoints}</label> <br/ >
                <label> Used Points:{usedPoints}</label> <br/ >
                </div>
                {/* <Link to ="/classes"><button>⇦ Classes </button></Link>
                <br />
                <Link to ="/heroStats"><button> Finish ⇨</button></Link>
                */}
                
            </body>
            {/* END OF STATS CALC STUFF HERE */}
        </BackgroundContainer>
    )
}
export default BuildsPage
