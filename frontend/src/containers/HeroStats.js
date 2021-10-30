import React, {useState} from 'react';

import '../stats.css';
import Incrementor from '../components/Incrementor/Inc';
import { Link } from 'react-router-dom';


const min = 8;
const max = 15;
const totalPoints = 27;

const HeroStats = () => {

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
    
    const[availablePoints, trackAvailablePoints] = useState(27)
    const[usedPoints, trackUsedPoints] = useState(0)

   

    return (
        <>
 
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
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints} 
                                    onChange = {
                                        (v,count, points, trackpoints) => {
                                            setStrValue(v);
                                            setStrCounter(count);
                                            
                                            if(usedPoints>27 && availablePoints<0){
                                                alert("Sorry homie, you out of points. Resetting now")
                                                trackUsedPoints(27)
                                                trackAvailablePoints(0)
                                            }
                                            else{
                                                trackUsedPoints(trackpoints)
                                                trackAvailablePoints(points)
                                            }

                                            
                                           

                                            // if(availablePoints<0){
                                            //     alert("All 27 points used")
                                            //     trackAvailablePoints(0)
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
                                <div><p>-1</p></div>
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
                                    CurrentPoints = {usedPoints}
                                    onChange = {
                                        (v, count, points, trackpoints) => {

                                        setDexValue(v)
                                        setDexCounter(count)

                                        if(usedPoints>27 && availablePoints<0){
                                            alert("Sorry homie, you out of points. Resetting now")
                                            trackUsedPoints(27)
                                            trackAvailablePoints(0)
                                        }
                                        else{
                                            trackUsedPoints(trackpoints)
                                            trackAvailablePoints(points)
                                        }
                                      

                                        // if(availablePoints<0){
                                        //     alert("All 27 points used")
                                        //     trackAvailablePoints(0)
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
                                <div><p>-1</p></div>
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
                                    onChange = {(v,count, points, trackpoints) => {
                                        setConCounter(count)
                                        setConValue(v)

                                        if(usedPoints>27 && availablePoints<0){
                                            alert("Sorry homie, you out of points. Resetting now")
                                            trackUsedPoints(27)
                                            trackAvailablePoints(0)
                                        }
                                        else{
                                            trackUsedPoints(trackpoints)
                                            trackAvailablePoints(points)
                                        }
                                      

                                        // if(availablePoints<0){
                                        //     alert("All 27 points used")
                                        //     trackAvailablePoints(0)
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
                                <div><p>-1</p></div>
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
                                    onChange = {(v,count, points, trackpoints) => {
                                        setIntValue(v);
                                        setIntCounter(count);

                                        if(usedPoints>27 && availablePoints<0){
                                            alert("Sorry homie, you out of points. Resetting now")
                                            trackUsedPoints(27)
                                            trackAvailablePoints(0)
                                        }
                                        else{
                                            trackUsedPoints(trackpoints)
                                            trackAvailablePoints(points)
                                        }
                                      


                                        // if(availablePoints<0){
                                        //     alert("All 27 points used")
                                        //     trackAvailablePoints(0)
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
                                <div><p>-1</p></div>
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
                                    onChange = {(v,count, points, trackpoints) => {
                                        setWisValue(v);
                                        setWisCounter(count);

                                        if(usedPoints>27 && availablePoints<0){
                                            alert("Sorry homie, you out of points. Resetting now")
                                            trackUsedPoints(27)
                                            trackAvailablePoints(0)
                                        }
                                        else{
                                            trackUsedPoints(trackpoints)
                                            trackAvailablePoints(points)
                                        }
                                      
                                      

                                        // if(availablePoints<0){
                                        //     alert("All 27 points used")
                                        //     trackAvailablePoints(0)
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
                                <div><p>-1</p></div>
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
                                    onChange = {(v,count, points, trackpoints) => {
                                        
                                        setChaValue(v);
                                        setChaCounter(count);

                                        if(usedPoints>27 && availablePoints<0){
                                            alert("Sorry homie, you out of points. Resetting now")
                                            trackUsedPoints(27)
                                            trackAvailablePoints(0)
                                        }
                                        else{
                                            trackUsedPoints(trackpoints)
                                            trackAvailablePoints(points)
                                        }
                                      

                                        // if(availablePoints<0){
                                        //     alert("All 27 points used")
                                        //     trackAvailablePoints(0)
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
                                <div><p>-1</p></div>
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
                <Link to ="/classes"><button>⇦ Classes </button></Link>
                <br />
                <Link to ="/heroStats"><button> Finish ⇨</button></Link>
               
                
            </body>
        </>
    )
}

export default HeroStats;