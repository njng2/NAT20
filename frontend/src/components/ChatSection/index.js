import React, {useState} from 'react';
import ChatFeed from './ChatFeed';
import { ChatEngine } from 'react-chat-engine';
import './Chat.css'


const ChatSection = () => {
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

export default ChatSection