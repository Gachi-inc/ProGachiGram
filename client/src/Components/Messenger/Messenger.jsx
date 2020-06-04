import React, { Component } from 'react';
import Messages from "./containers/Messages"
import Dialogs from './containers/Dialogs'
import SocketChat from 'socket.io-client';
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
    Search
} from './Messenger.styled';

import { 
    Chat,
    MsgField,
    ExportMsgField,
    ChatName,
    IsOnline,
} from './components/Chat/Chat.styles';

//const socket = SocketChat('http://localhost:5000');

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

                    <div className = "sidebar__dialogs">
                    <Dialogs
                        userId = {0}
                        items = {[]}
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
                        <Messages />
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