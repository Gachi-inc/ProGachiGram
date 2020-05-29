import React, { Component } from 'react';
import {ChatComponent} from "./components/Chat"
   import {Switch, Route} from 'react-router-dom';
import {
    StyledMessenger, 
    NavLink,
    SideBar,
    ActiveNavLink,
    User,
    Avatar,
    UserInfo,
    Wrapper

} from './Messenger.styled';

import ava from '../../Pictures/ava.jpg' 
class Messenger extends Component{
    
    render(){
        return (
            
            <StyledMessenger>
                <SideBar>
                    <User>
                        <Avatar src = "https://sun9-67.userapi.com/c850124/v850124033/aec0f/1GksRmx2cPg.jpg?ava=1" alt = 'user' />
                        <UserInfo>
                            Komodood
                        </UserInfo>
                    </User>
                    <NavLink to="/im/dialogs" activeStyle={ActiveNavLink}>
                        Диалоги
                    </NavLink>
                    <NavLink to="im/contacts" activeStyle={ActiveNavLink}>
                        Контакты
                    </NavLink>
                    <NavLink to="/settings" activeStyle={ActiveNavLink}>
                        Настройки
                    </NavLink>
                    <NavLink to="/invite" activeStyle={ActiveNavLink}>
                        Добавить друга
                    </NavLink>
                    <NavLink to="/help" activeStyle={ActiveNavLink}>
                        Помощь
                    </NavLink>
                </SideBar>
            
            <Wrapper>
                <Switch>
                    <Route path ="/im/sid" component={ChatComponent}/>
                    <Route path ="im/help" component={ChatComponent}/>
                    <Route path ="/im/dialogs" component={ChatComponent}/>
                </Switch>
            </Wrapper>
            </StyledMessenger>
        )
    }
}

export default Messenger;