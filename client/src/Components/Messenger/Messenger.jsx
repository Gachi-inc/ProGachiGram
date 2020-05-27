import React, { Component } from 'react';
import Message from "../Message/Message"
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
    ButtonImg,
    ExportMsgField,
    ChatWrapper,
    ChatName,
    IsOnline

} from './Messenger.styled';

import ava from '../../Pictures/ava.jpg' 
class Messenger extends Component{

    render(){

        return (
            
            <StyledMessenger>
                <SideBar>
                    <User>
                        <Avatar src = {ava} alt = 'user' />
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
                <ChatWrapper>
                    <ChatName>
                        Владимир
                        <IsOnline isonline>
                            online
                        </IsOnline>
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
                </ChatWrapper>
            </StyledMessenger>
        )
    }
}

export default Messenger;