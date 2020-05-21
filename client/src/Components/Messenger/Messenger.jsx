import React, { Component } from 'react';
import {
    StyledMessenger, 
    NavLink,
    SideBar,
    ActiveNavLink,
    User,
    Avatar,
    UserInfo,
    Chat,
    MsgField,
    SendButton,
    WrapperMsgField,
    ButtonImg,
    ExportMsgField,

} from './Messenger.styled';

import ava from '../../Pictures/ava.jpg' 
class Messenger extends Component{

    render(){

        return (
            <StyledMessenger>
                    <SideBar>

                        <User>
                            <Avatar src = {ava} alt = 'user' ></Avatar>
                            <UserInfo>
                                Van Darkholme
                            </UserInfo>
                        </User>
                        <NavLink exact to="/contacts" activeStyle={ActiveNavLink}>
                            Контакты
                        </NavLink>
                        <NavLink exact to="/settings" activeStyle={ActiveNavLink}>
                            Настройки
                        </NavLink>
                        <NavLink exact to="/invite" activeStyle={ActiveNavLink}>
                            Добавить друга
                        </NavLink>
                        <NavLink exact to="/help" activeStyle={ActiveNavLink}>
                            Помощь
                        </NavLink>
                    </SideBar>
                
                    <Chat>
                        <WrapperMsgField/>
                        <ExportMsgField>
                            <MsgField/>
                            <SendButton>
                                <ButtonImg>
                                </ButtonImg>
                            </SendButton>
                        </ExportMsgField>
                    </Chat>
                
                    <SideBar>
                        
                        Правое меню
                        
                    </SideBar>
                

                
                {/* <SideBar>
                    <User>
                        <Avatar src = {ava} alt = 'user' ></Avatar>
                        <UserInfo>
                            Van Darkholme
                        </UserInfo>
                    </User>
                    <NavLink exact to="/contacts" activeStyle={ActiveNavLink}>
                        Контакты
                    </NavLink>
                    <NavLink exact to="/settings" activeStyle={ActiveNavLink}>
                        Настройки
                    </NavLink>
                    <NavLink exact to="/invite" activeStyle={ActiveNavLink}>
                        Добавить друга
                    </NavLink>
                    <NavLink exact to="/help" activeStyle={ActiveNavLink}>
                        Помощь
                    </NavLink>
                </SideBar> */}
            
{/*                 
                <Body>
                    2
                </Body> */}
               
            </StyledMessenger>
        )
    }
}

export default Messenger;