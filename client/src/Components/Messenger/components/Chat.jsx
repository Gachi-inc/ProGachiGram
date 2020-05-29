import React, { Component} from 'react';
import Message from "../../Message/Message"
import { 
    Chat,
    MsgField,
    ExportMsgField,
    ChatName,
    IsOnline
} from '../Messenger.styled';
import searchSvg from "../../../assets"

export class ChatComponent extends Component{
    
    render(){
        const isOnline = false;
        return(
            <React.Fragment>
                <ChatName>
                    Владимир
                    <IsOnline>
                    {isOnline? "online": ""}
                    </IsOnline>
                    <img src= {searchSvg} alt ="searcIcon"/>
                </ChatName>
                
                <Chat>
                    <Message
                        avatar = "https://sun9-49.userapi.com/c850608/v850608927/827e1/cEmW2101YYI.jpg?ava=1"
                        text = "Привет друх!"
                        date = {new Date(2020, 4, 23)}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                        date = {new Date(2020, 4, 24)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                        date = {new Date(2020, 4, 24)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                        date = {new Date(2020, 4, 24)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                        date = {new Date(2020, 4, 24)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                        date = {new Date(2020, 4, 24)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                        date = {new Date(2020, 4, 24)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                        date = {new Date(2020, 4, 24)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                        date = {new Date(2020, 4, 24)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                        date = {new Date(2020, 4, 24)}
                        isMe = {true}
                    />
                    
                    <Message
                        avatar = "https://sun9-49.userapi.com/c850608/v850608927/827e1/cEmW2101YYI.jpg?ava=1"
                        text = "Мда, спасибо!"
                        date = {new Date(2020, 4, 25)}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "Отлично поболтали"
                        date = {new Date(2020, 4, 25)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "всегда приятно :)"
                        date = {new Date(2020, 4, 25)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1"
                        text = "чего молчишь?"
                        date = {new Date(2020, 4, 25)}
                        isMe = {true}
                    />
                    <Message
                        avatar = "https://sun9-49.userapi.com/c850608/v850608927/827e1/cEmW2101YYI.jpg?ava=1"
                        text = "ээй!"
                        date = {new Date()}
                        
                    />
                </Chat>
                <ExportMsgField>
                    <MsgField/>
                </ExportMsgField>
            </React.Fragment>
        )
    }
}