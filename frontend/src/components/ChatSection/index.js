import React, {useState} from 'react';
import ChatFeed from './ChatFeed';
import { ChatEngine } from 'react-chat-engine';
import store from '../../store';
import './Chat.css'


const ChatSection = () => {
    const storeState = store.getState();
    const userName = storeState.auth.user.name;
    const userPass = storeState.auth.user.chat_pass;
    console.log(userName);
    console.log(userPass);
    
    return (
        <ChatEngine
            height='90vh'
            // userName='testuser'
            // userSecret='123'
            userName={userName}
            userSecret={userPass}
            projectID='5c556676-8e91-420d-954f-f5f579eb8ec3'
            renderChatFeed={(chatAppProps)=> <ChatFeed {... chatAppProps}/>}
		/>
    )
}
export default ChatSection;
            //when the user signs up, it is going to store the signed up password and not hashed. 
            //We are trying to get the hashed password from ReduxStore but it is not the same as the password in ChatEngine
            //TODO: make ChatEngine store the hashed password and no the user input password. 