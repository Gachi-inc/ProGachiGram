import React, { Component } from 'react';
import {
    StyledMessenger, 
    Section,
    Chat,
    SideBar,
    Wrapper,
    MsgField,
    ChatField

} from './Messenger.styled';

class Messenger extends Component{

    render(){

        return (
            <StyledMessenger>
                <h1>Типо Мессенджер</h1>
                <Wrapper>
                    <SideBar>
                        <Section>
                        Левое меню
                        </Section>
                    </SideBar>
                
                    <Chat>
                    Чатик
                        <ChatField>
                            <MsgField/>
                        </ChatField>
                    </Chat>
                
                    <SideBar>
                        <Section>
                        Правое меню
                        </Section>
                    </SideBar>
                </Wrapper>
            </StyledMessenger>
        )
    }
}

export default Messenger;