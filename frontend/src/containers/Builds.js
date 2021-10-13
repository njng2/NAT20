import React, {useState} from 'react';
import Select from 'react-select';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import background from '../media/images/buildsbg2.png';
//import example from '../media/images/ExamplePlayer.jpg';

const Builds = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const data = [
        { value: 1, label: "Dragonborn"},{ value: 2,label: "Dwarf"},{value: 3,label: "Elf"},
        {value: 4,label: "Genassi"},{value: 5,label: "Grung"},{value: 6,label: "Locathah"}
      ];
    
    const data2 = [
        { value: 1, label: "Cleric"},{ value: 2,label: "Monk"},{value: 3,label: "Rogue"},
        {value: 4,label: "Warrior"},{value: 5,label: "Warlock"},{value: 6,label: "Wizard"}
    ];

    const data3 = [
        { value: 1, label: "Spells"},{ value: 2, label: "Items"},{value: 3,label: "Treasures"},
    ];

    const data4 = [
        { value: 1, label: "Yes"},{ value: 2, label: "No"}
    ];
      
    const [selectedValue, setSelectedValue] = useState(0);
    const handleChange = e => {
        setSelectedValue(e.value);
      }
    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <div style={{ 
            backgroundImage: `url(${background})`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            // marginTop: '-50px'       
        }}>
            <div style={{display: 'flex', justifyContent: 'center',height: '90vh', color:'white', overflow:'hidden', paddingTop:'25px'}}>
            <h1 style = {{color: 'white',}}>Character Builder</h1><br /><br />
            <div style = {{
                        width: '10vw',
                        height: '10vh',
                        postion: 'absolute',
                        color: 'black'
                    }}>
                    <br /><br />

                    <a style = {{color: 'white'}}>Race</a>
                    <Select
                        placeholder="Select"
                        value = {data.find(obj => obj.value === selectedValue)} // set selected value
                        options = {data} // set list of the data
                        onChange = {handleChange} // assign onChange function
                    />

                    <br /><br />
                     <a style = {{color: 'white'}}>Class</a>
                    <Select
                        placeholder="Select"
                        value = {data2.find(obj => obj.value === selectedValue)} // set selected value
                        options = {data2} // set list of the data
                        onChange = {handleChange} // assign onChange function
                    />

                    <br /><br />
                    <a style = {{color: 'white'}}>Equipment</a>
                    <Select
                        placeholder="Select"
                        value = {data3.find(obj => obj.value === selectedValue)} // set selected value
                        options = {data3} // set list of the data
                        onChange = {handleChange} // assign onChange function
                    />

                    <br/><br/>
                    <Select
                        placeholder="Stats ->"
                        value = {data4.find(obj => obj.value === selectedValue)} // set selected value
                        options = {data4} // set list of the data
                        onChange = {handleChange} // assign onChange function
                    />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Builds;