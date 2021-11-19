import React, {useState} from 'react';
import ChatFeed from './ChatFeed';
import { ChatEngine } from 'react-chat-engine';
import store from '../../store';
import './Chat.css'


const ChatSection = () => {
    const storeState = store.getState();
    const userName = storeState.auth.user.name;
    console.log(userName);
    
    return (
        <ChatEngine
            height='90vh'
            userName='testuser'
            userSecret='123'
            projectID='a0bc192f-b432-4582-bcd0-3803a06464d6'
            renderChatFeed={(chatAppProps)=> <ChatFeed {... chatAppProps}/>}
		/>
    )
}
export default ChatSection;