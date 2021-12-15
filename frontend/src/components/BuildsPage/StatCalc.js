import React, {useState} from 'react';
import HelpIcon from '@mui/icons-material/Help';
import Button from '@mui/material/Button';
import PopUp from '../PopUp/index';
import Incrementor from '../Incrementor/Inc';
import {Cursor} from '../PopUp/PopUpElements';
import Help from '@mui/icons-material/Help';

const StatCalc = ({
    usedPoints, 
    availablePoints, 
    totalPoints, 
    trackUsedPoints, 
    trackAvailablePoints, 
    min, max, valueStr, valueDex, valueCon, 
    valueInt, valueWis, valueCha, StrCount, setStrValue, 
    setStrCounter, DexCount, setDexValue, setDexCounter, ConCount, 
    setConValue, setConCounter, IntCount, setIntValue, setIntCounter, 
    WisCount, setWisValue, setWisCounter, ChaCount, setChaValue, setChaCounter,
    StrModCount, setStrModCounter,
    DexModCount, setDexModCounter,
    ConModCount, setConModCounter,
    IntModCount, setIntModCounter,
    WisModCount, setWisModCounter,
    ChaModCount, setChaModCounter,
}) => {
const [buttonPopup, setButtonPopup] = useState(false);
const [buttonPopup2, setButtonPopup2] = useState(false);
const [buttonPopup3, setButtonPopup3] = useState(false);
const [buttonPopup4, setButtonPopup4] = useState(false);
const [buttonPopup5, setButtonPopup5] = useState(false);
const [buttonPopup6, setButtonPopup6] = useState(false);

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
                            
                            <th button onClick={() => setButtonPopup(true)}><Cursor>STR <HelpIcon/></Cursor></th>
                           
                            {/* <Button 
                                variant="contained"
                                endIcon={<HelpIcon/>}
                                size="large" 
                                onClick={() => setButtonPopup(true)}
                                            // style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                                >
                              
                                    STR
                                
                            </Button> */}
                           
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
                                
                                <ul>
                                <li> You attempt to climb a sheer or slippery cliff, avoid hazards while scaling a wall, 
                                or cling to a surface while something is trying to knock you off.</li>

                                <li>You try to jump an unusually long distance or pull off a stunt midjump.</li>

                                <li>You struggle to swim or stay afloat in treacherous currents, storm-tossed waves, or areas of thick seaweed. Or another creature tries to push 
                                or pull you underwater or otherwise interfere with your swimming.</li>
                                </ul>
                            </PopUp>
                            
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueStr}
                                    Counter = {StrCount}
                                    Mod = {StrModCount}
                                    availPoints = {availablePoints}
                                    CurrentPoints = {usedPoints} 
                                    onChange = {
                                        (v,count, points, trackpoints,modpoints) => {

                                            
                                            if(usedPoints >=0 && usedPoints<=27){
                                                setStrValue(v);
                                                setStrCounter(count);
                                                trackUsedPoints(trackpoints);
                                                trackAvailablePoints(points);
                                                // if ((StrCount % 2 ===0 && StrCount>0) || (usedPoints === 27|| availablePoints ===0)){
                                                //     setStrModCounter(modpoints);
                                                //     // if(StrCount <=15 && StrCount%2 ===0 ){
                                                //     //     setStrModCounter(modpoints);
    
                                                //     // }  
                                                    
    
                                                // }
                                            }
                                            if ((availablePoints% 2 ===1  && valueStr >8 && valueStr<15) && availablePoints<27){
                                                    setStrModCounter(modpoints);
                                                    // if(StrCount <=15 && StrCount%2 ===0 ){
                                                    //     setStrModCounter(modpoints);
    
                                                    // }  
                                                    
    
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
                                <div>{StrModCount}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                {StrCount}
                            </td>
                        </tr>
                        <tr id="dex" class="stats-row">
                        
                            <th id button onClick={() => setButtonPopup2(true)}><Cursor>DEX <HelpIcon/></Cursor></th>
                            {/* <th>
                            <Button 
                                variant="contained"
                                endIcon={<HelpIcon/>}
                                size="large" 
                                onClick={() => setButtonPopup2(true)}
                                            // style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                                >
                                <Cursor>
                                    DEX
                                </Cursor>
                            </Button>
                            </th> */}
                            
                            <PopUp trigger ={buttonPopup2} setTrigger = {setButtonPopup2}>
                            <h1>Dexterity</h1>

                            <p>Dexterity measures agility, reflexes, and balance.</p>

                            <h1>Dexterity Checks</h1>

                            <p>A Dexterity check can model any attempt to move nimbly, quickly, or quietly, or to keep from 
                            falling on tricky footing. The Acrobatics, Sleight of Hand, and Stealth skills reflect aptitude 
                            in certain kinds of Dexterity checks.</p>

                            <h1>Acrobatics</h1>

                            <p>Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) 
                            check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips. </p>

                            <h1>Sleight of Hand</h1>

                            <p>Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The GM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a 
                            coin purse off another person or slip something out of another person's pocket.</p>
                            
                            <h1>Stealth</h1>
                            <p>Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, 
                            or sneak up on someone without being seen or heard.</p>
                            </PopUp>
            

                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueDex}
                                    Counter ={DexCount}
                                    availPoints = {availablePoints}
                                    Mod = {DexModCount}
                                    CurrentPoints = {usedPoints}
                                    onChange = {
                                        (v, count, points, trackpoints,modpoints) => {

                                            if(usedPoints >=0 && usedPoints<=27){
                                                setDexValue(v)
                                                setDexCounter(count)
                                                trackUsedPoints(trackpoints);
                                                trackAvailablePoints(points);
                                                // if ((DexCount%2===0 && DexCount >0) ||(usedPoints === 27|| availablePoints ===0)){
                                                //     setDexModCounter(modpoints);
                                                //     // if(DexCount% 2 ===0){
                                                //     //     setDexModCounter(modpoints);
    
                                                //     // }
                                                
                                                // }
                                            }
                                            if ((availablePoints % 2 ===1  && valueDex>8 && valueDex<15) && availablePoints<27){
                                                setDexModCounter(modpoints);
                                                // if(DexCount% 2 ===0){
                                                //     setDexModCounter(modpoints);

                                                // }
                                            
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
                        
                            <th button onClick={() => setButtonPopup3(true)}><Cursor>CON <HelpIcon/></Cursor></th>
                            {/* <th>
                            <Button 
                                variant="contained"
                                endIcon={<HelpIcon/>}
                                size="large" 
                                onClick={() => setButtonPopup3(true)}
                                            // style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                                >
                                <Cursor>
                                    CON
                                </Cursor>
                            </Button>
                            </th> */}
                            <PopUp trigger ={buttonPopup3} setTrigger = {setButtonPopup3}>

                            <h1>Constitution</h1>
                            <p>Constitution measures health, stamina, and vital force.</p>

                            <h1>Constitution Checks</h1>
                            <p> Constitution checks are uncommon, and no skills apply to Constitution checks, because the endurance this ability represents is largely passive rather 
                                than involving a specific effort on the part of a character or monster. 
                                A Constitution check can model your attempt to push beyond normal limits, however.The GM might call for a Constitution check when you try to 
                                accomplish tasks like the following:
                            </p>
                            <ul>
                            <li>Hold your breath</li>
                            <li>March or labor for hours without rest</li>
                            <li>Go without sleep</li>
                            <li>Survive without food or water</li>
                            <li>Quaff an entire stein of ale in one go</li>
                            </ul>

                            <h1>Hit Points</h1>
                            <p>Your Constitution modifier contributes to your hit points. Typically, you add your Constitution modifier to each Hit Die you roll for your hit points.
                                If your Constitution modifier changes, your hit point maximum changes as well, as though you had the new modifier from 1st level. For example, if you raise your Constitution score when you reach 4th level and your Constitution modifier increases from +1 to +2, 
                                you adjust your hit point maximum as though the modifier had always been +2. So you add 3 hit points for your first three levels, and then roll your hit points for 4th level using your new modifier. 
                                Or if you're 7th level and some effect lowers your Constitution score so as to 
                                reduce your Constitution modifier by 1, your hit point maximum is reduced by 7.
                            </p>
                            </PopUp>

                        
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
                                            // if ((ConCount % 2 ===0 && ConCount > 0) || (usedPoints === 27|| availablePoints ===0)){
                                            //     setConModCounter(modpoints);
                                            //     // if(ConCount%2 ===0){
                                            //     //     setConModCounter(modpoints);

                                            //     // }
                                                

                                            

                                            // }
                                            if ((availablePoints % 2 ===1 && valueCon>8 && valueCon<15) && availablePoints<27){
                                                setConModCounter(modpoints);
                                                // if(ConCount%2 ===0){
                                                //     setConModCounter(modpoints);
    
                                                // }
                                                
    
                                            
    
                                            }
                                        }
                                        // if (usedPoints % 2 ===1 && usedPoints<27){
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
                            <th button onClick={() => setButtonPopup4(true)}><Cursor>INT <HelpIcon/></Cursor> </th>
                            {/* <th>
                            <Button 
                                variant="contained"
                                endIcon={<HelpIcon/>}
                                size="large" 
                                onClick={() => setButtonPopup4(true)}
                                            // style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                                >
                                <Cursor>
                                    INT
                                </Cursor>
                            </Button>
                            </th> */}
                            
                            <PopUp trigger ={buttonPopup4} setTrigger = {setButtonPopup4}>
                                <h1>Intelligence</h1>
                                <p>Intelligence measures mental acuity, accuracy of recall, and the ability to reason.</p>

                                <h1>Intelligence Checks</h1>
                                <p>An Intelligence check comes into play when you need to draw on logic, education, memory, or 
                                deductive reasoning. The Arcana, History, Investigation, Nature, and Religion skills reflect aptitude 
                                in certain kinds of Intelligence checks.</p>

                                <h1>Arcana</h1>
                                <p>Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, 
                                magical traditions, the planes of existence, and the inhabitants of those planes.</p>

                                <h1>History</h1>
                                <p>Your Intelligence (History) check measures your ability to recall lore about historical events, 
                                legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.</p>

                                <h1>Investigation</h1>
                                <p>When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, 
                                discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls 
                                in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check.</p>

                                <h1>Nature</h1>
                                <p>Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles.</p>

                                <h1>Religion</h1>
                                <p>Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, 
                                religious hierarchies, holy symbols, and the practices of secret cults.</p>

                            </PopUp>
                        
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
                                            // if ((IntCount % 2 ===0 && IntCount>0) || (usedPoints === 27|| availablePoints ===0) ){
                                            //     setIntModCounter(modpoints);
                                            //     // if (IntCount% 2 ===0){
                                            //     //     setIntModCounter(modpoints);
    
                                            //     // }
                                                
    
                                            // }
                                            if ((availablePoints % 2 ===1  && valueInt>8 && valueInt<15) && availablePoints<27){
                                                setIntModCounter(modpoints);
                                                // if (IntCount% 2 ===0){
                                                //     setIntModCounter(modpoints);
    
                                                // }
                                                
    
                                            }
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
                                <div>{IntModCount}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{IntCount}</div>
                            </td>
                        </tr>
                        <tr id="wis" class="stats-row">
                        
                            <th button onClick={() => setButtonPopup5(true)}><Cursor>WIS <HelpIcon/></Cursor> </th>
                            {/* <th>
                            <Button 
                                variant="contained"
                                endIcon={<HelpIcon/>}
                                size="large" 
                                onClick={() => setButtonPopup5(true)}
                                            // style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                                >
                                <Cursor>
                                    WIS
                                </Cursor>
                            </Button>
                            </th> */}
                            
                            <PopUp trigger ={buttonPopup5} setTrigger = {setButtonPopup5}>
                            <h1>Wisdom</h1>
                            <p>Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.</p>

                            <h1>Wisdom Checks</h1>
                            <p> A Wisdom check might reflect an effort to read body language, understand someone's feelings, notice things about the environment, 
                            or care for an injured person. The Animal Handling, Insight, Medicine, 
                            Perception, and Survival skills reflect aptitude in certain kinds of Wisdom checks.</p>

                            <h1>Animal Handling</h1>
                            <p>When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, 
                            or intuit an animal's intentions, the GM might call for a Wisdom (Animal Handling) check. 
                            You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver.</p>

                            <h1>Insight</h1>
                            <p>Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a 
                            lie or predicting someone's next move. Doing so involves gleaning clues from body language, speech habits, 
                            and changes in mannerisms.</p>

                            <h1>Medicine</h1>
                            <p>A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.</p>

                            <h1>Perception</h1>
                            <p>Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, 
                            you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, 
                            whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.</p>
                            
                            <h1>Survival</h1>
                            <p>The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, 
                            predict the weather, or avoid quicksand and other natural hazards.</p>

                            </PopUp>
                
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
                                            // if((WisCount % 2 ===0 && WisCount>0)||(usedPoints === 27|| availablePoints ===0)){
                                            //     setWisModCounter(modpoints);
                                            //     // if(WisCount% 2 ===0){
                                            //     //     setWisModCounter(modpoints);
    
                                            //     // }
    
    
                                            // }
                                            if((availablePoints % 2 ===1 && valueWis>8 && valueWis<15) && availablePoints<27){
                                                setWisModCounter(modpoints);
                                                // if(WisCount% 2 ===0){
                                                //     setWisModCounter(modpoints);
    
                                                // }
    
    
                                            }
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
                                <div>{WisModCount}</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <div>{WisCount}</div>
                            </td>
                        </tr>
                        <tr id="cha" class="stats-row">
                        
                            <th button onClick={() => setButtonPopup6(true)}><Cursor>CHA <HelpIcon/></Cursor> </th>
                            {/* <th>
                            <Button 
                                variant="contained"
                                endIcon={<HelpIcon/>}
                                size="large" 
                                onClick={() => setButtonPopup6(true)}
                                            // style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                                >
                                <Cursor>
                                    CHA
                                </Cursor>
                            </Button>
                            </th> */}
                            <PopUp trigger ={buttonPopup6} setTrigger = {setButtonPopup6}>
                            <h1>Charisma</h1>
                            <p>Charisma measures your ability to interact effectively with others. 
                            It includes such factors as confidence and eloquence, 
                            and it can represent a charming or commanding personality.</p>

                            <h1>Charisma Checks</h1>
                            <p>A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, 
                            or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills 
                            reflect aptitude in certain kinds of Charisma checks.</p>

                            <h1>Deception</h1>
                            <p>Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. 
                            This deception can encompass everything from misleading others through ambiguity to telling outright lies. 
                            Typical situations include trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, 
                            dull someone's suspicions with false assurances, or maintain a straight face while telling a blatant lie.</p>

                            <h1>Intimidation</h1>
                            <p>When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check. 
                            Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, 
                            or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.</p>

                            <h1>Performance</h1>
                            <p>Your Charisma (Performance) check determines how well you can delight an audience with music, 
                            dance, acting, storytelling, or some other form of entertainment.</p>

                            <h1>Persuasion</h1>
                            <p>When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Charisma (Persuasion) check. 
                            Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a 
                            chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk.</p>
                            </PopUp>
                            
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
                                            // if ((ChaCount % 2 ===0 && ChaCount>0) || (usedPoints === 27|| availablePoints ===0)){
                                            //     setChaModCounter(modpoints);
                                            //     // if (ChaCount <=15 && ChaCount% 2 ===0 ){
                                            //     //     setChaModCounter(modpoints);
    
                                            //     // }
                                                
    
                                            // }
                                            if ((availablePoints % 2 ===1  && valueCha>8 && valueCha<15) && availablePoints<27){
                                                setChaModCounter(modpoints);
                                                // if (ChaCount <=15 && ChaCount% 2 ===0 ){
                                                //     setChaModCounter(modpoints);
    
                                                // }
                                                
    
                                            }
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
               

                {/* <button onClick={onSubmit}>Save Build</button> */}
            </body>
        </div>
    )
}

export default StatCalc;
