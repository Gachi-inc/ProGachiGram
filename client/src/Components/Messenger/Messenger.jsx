import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { dialogsActions } from 'redux/actions';

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

const Messenger = props =>{
    const{setCurrentDialogId, user, isSearchMsgOpen} = props
    useEffect(() => {
        const { pathname } = props.location;
        const dialogId = pathname.split('/').pop();
        if (dialogId !== "im") setCurrentDialogId(dialogId);
      }, [props.location.pathname]);

    
        return (
            <StyledMessenger>
                <SideBar>
                    <SideBarContent/>
                </SideBar>

                <Wrapper className = "chat__dialog">
                {user && (
                    <React.Fragment>
                        <ChatName className = "chat__dialog-header">
                            <div/>
                            <div className = "chat__dialog-header-center">
                                <b className = "chat__dialog-header-username">{user.fullname}</b>
                                <div className = "chat__dialog-header-status">
                                    <IsOnline className = {user.isOnline? "status-online" : "status"}>
                                        {user.isOnline? "online" : "offline"}
                                    </IsOnline>  
                                </div>
                            </div>
                            <div className = "chat__searchbar">
                                {/* <button className = "chat__searchbar-button" 
                                    onClick={() => this.openSearchMsg()}>
                                    <img className = "chat__searchbar-icon" src = {searchSvg} alt = "searchIcon"/>
                                </button> */}
                            </div>
                        </ChatName>
                            
                        {/* // <ChatName>
                        //     <SearchMsg 
                        //     isOpen={this.state.isSearchMsgOpen}
                        //     onClose={() => this.closeSearchMsg()}>
                        //         <input type="text" placeholder = "введите текст сообщения"/> 
                        //     </SearchMsg>
                        // </ChatName>
                        //} */}

                        <Chat>
                            <Messages />
                        </Chat>

                        <ChatInput/>
                    </React.Fragment>
                )}
                </Wrapper>
            </StyledMessenger>
        );
    }


    // openSearchMsg() {
    //     this.setState({ isSearchMsgOpen: true });
    //   }
    
    //   closeSearchMsg() {
    //     this.setState({ isSearchMsgOpen: false });
    //   }

export default withRouter(
    connect(
        ({user}) => ({user: user.data}),
        dialogsActions,
    )(Messenger)
);