import { ChatEngine } from 'react-chat-engine';
import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import ChatSection from '../components/ChatSection';

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Navbar toggle={toggle}/>
            <ChatSection/>
        </>
    )
}

export default Chat;