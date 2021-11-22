import React, {useState} from 'react';
import PopUp from '../PopUp/index';
import Incrementor from '../Incrementor/Inc';

const StatCalc = ({usedPoints, availablePoints, totalPoints, trackUsedPoints, trackAvailablePoints, min, max, valueStr, valueDex, valueCon, valueInt, valueWis, valueCha, StrCount, setStrValue, setStrCounter, DexCount, setDexValue, setDexCounter, ConCount, setConValue, setConCounter, IntCount, setIntValue, setIntCounter, WisCount, setWisValue, setWisCounter, ChaCount, setChaValue, setChaCounter,}) => {
const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
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
                            <div>
                            <button class = "stat" onClick={() => setButtonPopup(true)}><th> STR </th></button>
                            
                            <PopUp trigger ={buttonPopup} setTrigger = {setButtonPopup}>
                                <h1>Strength</h1>

                                <p>Strength measures bodily power, athletic training, 
                                and the extent to which you can exert raw physical force.</p>

                                <h1>Strength Checks</h1>

                                <p>A Strength check can model any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation. 
                                The Athletics skill reflects aptitude in certain kinds of Strength checks.</p>

                                <h1>Athletics</h1>

                                <p>Your Strength (Athletics) check covers difficult situations you encounter 
                                while climbing, jumping, or swimming. Examples include the following activities: </p>

                                <ul> You attempt to climb a sheer or slippery cliff, avoid hazards while scaling a wall, 
                                or cling to a surface while something is trying to knock you off.</ul>

                                <ul>You try to jump an unusually long distance or pull off a stunt midjump.</ul>

                                <ul>You struggle to swim or stay afloat in treacherous currents, storm-tossed waves, or areas of thick seaweed. Or another creature tries to push 
                                or pull you underwater or otherwise interfere with your swimming.</ul>
                            </PopUp>
                            </div>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueStr}
                                    Counter = {StrCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints} 
                                    onChange = {
                                        (v,count, points, trackpoints) => {

                                            
                                            if(usedPoints >=0 && usedPoints<=27){
                                                setStrValue(v);
                                                setStrCounter(count);
                                                trackUsedPoints(trackpoints);
                                                trackAvailablePoints(points);
                                            }

                                            
                                        

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
                                <div><p>-1</p></div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                {StrCount}
                            </td>
                        </tr>
                        <tr id="dex" class="stats-row">
                            <div>
                            <button class = "stat" onClick={() => setButtonPopup(true)}><th> DEX </th></button>
                            
                            <PopUp trigger ={buttonPopup} setTrigger = {setButtonPopup}>
                                <p>test test test</p>
                            </PopUp>
                            </div>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueDex}
                                    Counter ={DexCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints}
                                    onChange = {
                                        (v, count, points, trackpoints) => {

                                            if(usedPoints >=0 && usedPoints<=27){
                                                setDexValue(v)
                                                setDexCounter(count)
                                                trackUsedPoints(trackpoints);
                                                trackAvailablePoints(points);
                                            }
                                    

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
                        <div>
                            <button class = "stat" onClick={() => setButtonPopup(true)}><th> CON </th></button>
                            
                            <PopUp trigger ={buttonPopup} setTrigger = {setButtonPopup}>
                            <p>test test test</p>
                            </PopUp>
                            </div>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueCon}
                                    Counter = {ConCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints}
                                    onChange = {(v,count, points, trackpoints) => {
                                        if(usedPoints >=0 && usedPoints<=27){
                                            setConCounter(count)
                                            setConValue(v)

                                            trackUsedPoints(trackpoints);
                                            trackAvailablePoints(points);
                                        }
                                    

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
                                <div><p>-1</p></div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{ConCount}</div>
                            </td>
                        </tr>
                        <tr id="int" class="stats-row">
                        <div>
                            <button class = "stat" onClick={() => setButtonPopup(true)}><th> INT </th></button>
                            
                            <PopUp trigger ={buttonPopup} setTrigger = {setButtonPopup}>
                                <p>Test Test Test</p>
                            </PopUp>
                            </div>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueInt}
                                    Counter = {IntCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints}
                                    onChange = {(v,count, points, trackpoints) => {
                                        if(usedPoints >=0 && usedPoints<=27){
                                            setIntValue(v);

                                            setIntCounter(count);

                                            trackUsedPoints(trackpoints);
                                            trackAvailablePoints(points);
                                        }


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
                                <div><p>-1</p></div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{IntCount}</div>
                            </td>
                        </tr>
                        <tr id="wis" class="stats-row">
                        <div>
                            <button class = "stat" onClick={() => setButtonPopup(true)}><th> WIS </th></button>
                            
                            <PopUp trigger ={buttonPopup} setTrigger = {setButtonPopup}>
                            <p>test test test</p>
                            </PopUp>
                            </div>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueWis}
                                    Counter = {WisCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints}
                                    onChange = {(v,count, points, trackpoints) => {
                                        if(usedPoints >=0 && usedPoints<=27){
                                            setWisValue(v);
                                            setWisCounter(count);

                                            trackUsedPoints(trackpoints);
                                            trackAvailablePoints(points);
                                        }
                                    
                                    

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
                                <div><p>-1</p></div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{WisCount}</div>
                            </td>
                        </tr>
                        <tr id="cha" class="stats-row">
                        <div>
                            <button class = "stat" onClick={() => setButtonPopup(true)}><th> CHA </th></button>
                            
                            <PopUp trigger ={buttonPopup} setTrigger = {setButtonPopup}>
                            <p>test test test</p>
                            </PopUp>
                            </div>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueCha}
                                    Counter = {ChaCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints}
                                    onChange = {(v,count, points, trackpoints) => {
                                        if(usedPoints >=0 && usedPoints<=27){
                                            setChaValue(v);
                                            setChaCounter(count);

                                            trackUsedPoints(trackpoints);
                                            trackAvailablePoints(points);
                                        }
                                    

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
                {/* <Link to ="/classes"><button>⇦ Classes </button></Link>
                <br />
                <Link to ="/heroStats"><button> Finish ⇨</button></Link>
                */}

                {/* <button onClick={onSubmit}>Save Build</button> */}
            </body>
        </div>
    )
}

export default StatCalc;
