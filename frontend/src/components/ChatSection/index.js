import React, {useState} from 'react';
import ChatFeed from './ChatFeed';
import { ChatEngine } from 'react-chat-engine';
import store from '../../store';
import './Chat.css'


const ChatSection = () => {
    const storeState = store.getState();
    const userName = storeState.auth.user.name;
    const userPass = storeState.auth.user.password;
    console.log(userName);
    console.log(userPass);
    
    return (
        <ChatEngine
            height='90vh'
            userName={userName}
            //when the user signs up, it is going to store the signed up password and not hashed. 
            //We are trying to get the hashed password from ReduxStore but it is not the same as the password in ChatEngine
            //TODO: make ChatEngine store the hashed password and no the user input password. 
            userSecret={userPass}
            projectID='c97f9756-a52f-4853-a03e-b205e03c9138'
            renderChatFeed={(chatAppProps)=> <ChatFeed {... chatAppProps}/>}
		/>
    )
}
export default ChatSection;