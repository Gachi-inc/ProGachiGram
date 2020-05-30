import React, { Component } from 'react';
import {ChatComponent} from "./components/Chat/Chat"
import Dialogs from './components/Dialogs/Dialogs';

   import {Switch, Route} from 'react-router-dom';
import {
    StyledMessenger, 
    NavLink,
    SideBar,
    ActiveNavLink,
    User,
    Avatar,
    UserInfo,
    Wrapper,
    Wrapper2,

} from './Messenger.styled';


class Messenger extends Component{
    
    render(){
        return (
            
            <StyledMessenger>
                {/* <SideBar>
                    <User>
                        <Avatar src = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1" alt = 'user' />
                        <UserInfo>
                            MIMOG
                        </UserInfo>
                    </User>
                    <NavLink to="/im/dialogs" activeStyle={ActiveNavLink}>
                        Диалоги
                    </NavLink>
                    <NavLink to="/im/contacts" activeStyle={ActiveNavLink}>
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
                </SideBar> */}
            
                <Wrapper>
                    {/* <Switch>
                        <Route path ="/im/sid" component={ChatComponent}/>
                        <Route path ="/im/contacts" component={Dialogs}/>
                        <Route path ="/im/dialogs" component={ChatComponent}/>
                    </Switch> */}
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
                                    created_at: new Date(2020, 3,3),
                                    user: {
                                        _id: 1,
                                        fullname: "Владимир Овчинников",
                                        avatar: null,
                                        isonline: true
                                    }
                                },

                            ]
                        }
                    
                    
                    />
                </Wrapper>
                <Wrapper2>
                    <ChatComponent/>
                </Wrapper2>
            </StyledMessenger>
        )
    }
}

export default Messenger;