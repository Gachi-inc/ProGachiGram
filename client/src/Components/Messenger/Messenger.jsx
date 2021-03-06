import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { dialogsActions } from 'redux/actions';

import Messages from "./containers/Messages"
import SideBarContent from './containers/SideBar'

import ChatNameContent from "./containers/ChatName"
import ChatInput from "./containers/ChatInput"
import SearchMsg from "../SearchMsg/SearchMsg"

import searchSvg from "assets/svg/search.svg"

import {
    StyledMessenger, 
    Wrapper,
    SideBar,
    ChatName
} from './Messenger.styled';

import { 
    Chat,
} from './components/Chat/Chat.styles';

//const socket = SocketChat('http://localhost:5000');

const Messenger = props =>{
    const{setCurrentDialogId, user, isSearchMsgOpen} = props
    useEffect(() => {
        const { pathname } = props.location;
        const dialogId = pathname.split('/').pop();
        setCurrentDialogId(dialogId);
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
                            <ChatNameContent/>
                        </ChatName>
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