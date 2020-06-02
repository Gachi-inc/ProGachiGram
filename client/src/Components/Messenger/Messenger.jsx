import React, { Component } from 'react';
import Message from "../Message/Message"
import Dialogs from './containers/Dialogs'

import UsersSvg from '../../assets/svg/users.svg'
import СreateDialSvg from '../../assets/svg/create.svg'
import searchSvg from "assets/svg/search.svg"
import sendSvg from "assets/svg/send.svg"
import voiceSendSvg from "assets/svg/microphone.svg"
import smileSvg from "assets/svg/smile.svg"

import {
    StyledMessenger, 
    SideBar,
    Wrapper,

} from './Messenger.styled';

import { 
    Chat,
    MsgField,
    ExportMsgField,
    ChatName,
    IsOnline,
} from './components/Chat/Chat.styles';


class Messenger extends Component{
    
    render(){
        const isOnline = true;
        return (
            
            <StyledMessenger>
                
                <SideBar className="sidebar">
                    <div className="sidebar__header">
                        <div>
                            <img src = {UsersSvg} alt = "group-icon"/>
                            <span>Список диалогов</span>
                        </div>
                            <button><img src = {СreateDialSvg} alt = "create-icon"/></button>
                    </div>
                    <input className ="sidebar__search-dialog" placeholder = "Поиск среди контактов" />

                    <div className = "sidebar__dialogs">
                    <Dialogs
                        userId = {0}
                        items = {[
                                {
                                    _id: Math.random(),
                                    text: "Привет, Друх! Как дела?",
                                    //isReaded: false,
                                    created_at: new Date(),
                                    user: {
                                        _id: 1,
                                        fullname: "Владимир Овчинников",
                                        avatar: null,
                                        isonline: true
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    text: "Привет, Друх! Как дела?",
                                    //isReaded: false,
                                    created_at: new Date(),
                                    user: {
                                        _id: 1,
                                        fullname: "Григорий Савин",
                                        avatar: null,
                                        isonline: true
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    text: "Привет, Друх! Как дела?",
                                    //isReaded: false,
                                    created_at: new Date(),
                                    user: {
                                        _id: 1,
                                        fullname: "NekitLnp",
                                        avatar: null,
                                        isonline: true
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    text: "Привет, Друх! Как дела?",
                                    //isReaded: false,
                                    created_at: new Date(),
                                    user: {
                                        _id: 1,
                                        fullname: "Камень",
                                        avatar: null,
                                        isonline: true
                                    }
                                },

                                {
                                    _id: Math.random(),
                                    text: "Как там с энергией?",
                                    //isReaded: false,
                                    created_at: new Date(2020, 3,3),
                                    user: {
                                        _id: 1,
                                        fullname: "Альберт Энштейн",
                                        avatar: "https://images.artwanted.com/large/98/31049_1460598.JPG",
                                        isonline: true
                                    }
                                },
                            ]
                        }
                    />
                    </div>
                    
                </SideBar>
                <Wrapper className = "chat__dialog">
                    <ChatName className = "chat__dialog-header">
                        <div/>
                        <div className = "chat__dialog-header-center">
                            <b className = "chat__dialog-header-username">Владимир</b>
                            <div className = "chat__dialog-header-status">
                                <IsOnline className = {isOnline? "status-online" : "status"}>
                                    {isOnline? "online" : "offline"}
                                </IsOnline>  
                            </div>
                        </div>
                        <div className = "chat__searchbar">
                            <button className = "chat__searchbar-button"><img className = "chat__searchbar-icon" src = {searchSvg} alt = "searchIcon"/></button>
                        </div>
                    </ChatName>
                    
                    <Chat>
                        <Message
                            avatar = "https://sun9-49.userapi.com/c850608/v850608927/827e1/cEmW2101YYI.jpg?ava=1"
                            text = "Привет друх!"
                            date = {new Date(2020, 4, 23)}
                        />
                        <Message
                            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
                            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                            date = {new Date(2020, 4, 24)}
                            isMe = {true}
                        />
                        <Message
                            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
                            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                            date = {new Date(2020, 4, 24)}
                            isMe = {true}
                        />
                        <Message
                            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
                            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                            date = {new Date(2020, 4, 24)}
                            isMe = {true}
                        />
                        <Message
                            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
                            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                            date = {new Date(2020, 4, 24)}
                            isMe = {true}
                        />
                        <Message
                            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
                            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                            date = {new Date(2020, 4, 24)}
                            isMe = {true}
                        />
                        <Message
                            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
                            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
                            date = {new Date(2020, 4, 24)}
                            isMe = {true}
                        />
                        <Message
                            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
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
                            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
                            text = "Отлично поболтали"
                            date = {new Date(2020, 4, 25)}
                            isMe = {true}
                        />
                        <Message
                            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
                            text = "всегда приятно :)"
                            date = {new Date(2020, 4, 25)}
                            isMe = {true}
                        />
                        <Message
                            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
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
                        <MsgField placeholder = "Введите текст сообщения"/>
                        
                            <button className = "smileButton" >
                                <img src = {smileSvg} alt = "smileButton-icon"/>
                            </button>
                            <button className = "sendButton"><img src = {sendSvg} alt = "sendIcon" /></button>
                        
                    </ExportMsgField>
                </Wrapper>
            </StyledMessenger>
        )
    }
}

export default Messenger;