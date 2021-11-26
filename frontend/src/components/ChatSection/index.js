import React, {useState} from 'react';
import ChatFeed from './ChatFeed';
import { ChatEngine } from 'react-chat-engine';
import store from '../../store';
import './Chat.css'


const ChatSection = () => {
    // const storeState = store.getState();
    // const userName = storeState.auth.user.name;
    // const userPass = storeState.auth.user.password;
    // console.log(userName);
    // console.log(userPass);
    
    return (
        <ChatEngine
            height='90vh'
            userName='testuser'
            userSecret='123'
            projectID='c97f9756-a52f-4853-a03e-b205e03c9138'
            renderChatFeed={(chatAppProps)=> <ChatFeed {... chatAppProps}/>}
		/>
    )
}
export default ChatSection;