import React, {useState} from 'react';

import '../stats.css';
import Incrementor from '../components/Incrementor/Inc';
import { Link } from 'react-router-dom';


const min = 8;
const max = 15;

const HeroStats = () => {

    const [valueStr, setStrValue] = useState(min)
    const [valueDex, setDexValue] = useState(min)
    const [valueCon, setConValue] = useState(min)
    const [valueInt, setIntValue] = useState(min)
    const [valueWis, setWisValue] = useState(min)
    const [valueCha, setChaValue] = useState(min)

  
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
                                    onChange = {(v) => setStrValue(v)} 
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
                                <div><p>cost</p></div>
                            </td>
                        </tr>
                        <tr id="dex" class="stats-row">
                            <th>DEX</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueDex}
                                    onChange = {(v) => setDexValue(v)} 
                                    min={min} 
                                    max={max} />
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
                                <div><p>cost</p></div>
                            </td>
                        </tr>
                        <tr id="con" class="stats-row">
                            <th>CON</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueCon}
                                    onChange = {(v) => setConValue(v)} 
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
                                <div><p>cost</p></div>
                            </td>
                        </tr>
                        <tr id="int" class="stats-row">
                            <th>INT</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueInt}
                                    onChange = {(v) => setIntValue(v)} 
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
                                <div><p>cost</p></div>
                            </td>
                        </tr>
                        <tr id="wis" class="stats-row">
                            <th>WIS</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueWis}
                                    onChange = {(v) => setWisValue(v)} 
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
                                <div><p>cost</p></div>
                            </td>
                        </tr>
                        <tr id="cha" class="stats-row">
                            <th>CHA</th>
                            <td className="Holder">
                                <div className="Right">
                                    <Incrementor
                                    value = {valueCha}
                                    onChange = {(v) => setChaValue(v)} 
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
                                <div><p>cost</p></div>
                            </td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </table>
                <Link to ="/classes"><button>⇦ Classes </button></Link>
                <br />
                <Link to ="/heroStats"><button> Finish ⇨</button></Link>
                
            </body>
        </>
    )
}

export default HeroStats;