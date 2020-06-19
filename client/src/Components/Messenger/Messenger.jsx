import React, { Component } from 'react';
//import SocketChat from 'socket.io-client';

import Messages from "./containers/Messages"
import SideBarContent from './containers/SideBar'

import ChatInput from "./containers/ChatInput"
import SearchMsg from "../SearchMsg/SearchMsg"

import searchSvg from "assets/svg/search.svg"

import {
    StyledMessenger, 
    Wrapper,
    SideBar
} from './Messenger.styled';

import { 
    Chat,
    ChatName,
    IsOnline,
} from './components/Chat/Chat.styles';

//const socket = SocketChat('http://localhost:5000');

class Messenger extends Component{

    constructor(props){
        super(props);
        this.state ={
            User: props.DataRequest,
            isSearchMsgOpen: false,
            isOnline: false,
        }
    }

    render(){
        return (
            
            <StyledMessenger>
                
                <SideBar>
                    <SideBarContent/>
                </SideBar>

                <Wrapper className = "chat__dialog">

                    {this.state.isSearchMsgOpen === false ? 
                    <ChatName className = "chat__dialog-header">
                        <div/>
                        <div className = "chat__dialog-header-center">
                            <b className = "chat__dialog-header-username">{this.state.User}</b>
                            <div className = "chat__dialog-header-status">
                                <IsOnline className = {this.state.isOnline? "status-online" : "status"}>
                                    {this.state.isOnline? "online" : "offline"}
                                </IsOnline>  
                            </div>
                        </div>
                        <div className = "chat__searchbar">
                            <button className = "chat__searchbar-button" 
                                onClick={() => this.openSearchMsg()}>
                                <img className = "chat__searchbar-icon" src = {searchSvg} alt = "searchIcon"/>
                            </button>
                        </div>
                    </ChatName>
                :        
                    <ChatName>
                        <SearchMsg 
                        isOpen={this.state.isSearchMsgOpen}
                        onClose={() => this.closeSearchMsg()}>
                            <input type="text" placeholder = "введите текст сообщения"/> 
                        </SearchMsg>
                    </ChatName>
                }

                    <Chat>
                        <Messages />
                    </Chat>

                    <ChatInput/>

                </Wrapper>
            </StyledMessenger>
        )
    }

    openSearchMsg() {
        this.setState({ isSearchMsgOpen: true });
      }
    
      closeSearchMsg() {
        this.setState({ isSearchMsgOpen: false });
      }
}

export default Messenger;