import React, {useState} from 'react';
// import Select from 'react-select';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
//import background from '../media/images/buildsbg2.png';
//import example from '../media/images/ExamplePlayer.jpg';
import ClassesSection from '../components/ClassesSection';

const Classes = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
   
    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
       <ClassesSection/>
    </>
    )
}
export default Classes;