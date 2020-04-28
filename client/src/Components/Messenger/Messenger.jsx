import React, { Component } from 'react';
import {
    StyledMessenger, 
    NavLink,
    SideBar,
    Body,
    ActiveNavLink,
    User,
    Avatar,
    UserInfo,
    Wrapper,
    Section,
    Chat,
    ChatField,
    MsgField,

} from './Messenger.styled';

import ava from '../../Pictures/ava.jpg' 
class Messenger extends Component{

    render(){

        return (
            <StyledMessenger>
                <h1>Типо Мессенджер</h1>
                <Wrapper>
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
                    
                        <MsgField/>
                    </Chat>
                
                    <SideBar>
                        
                        Правое меню
                        
                    </SideBar>
                </Wrapper>

                
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