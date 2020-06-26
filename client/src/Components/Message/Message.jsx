import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Msg, MsgАvatar, Bubble, Text, MsgDate} from './Message.styled'

import  Time from '../Time/index'
import Avatar from '../Messenger/components/Avatar'

const Type = (isMe) =>{
    return(
        isMe? "msg--isme": "msg"
        );   
}


const Message = ({
    user,
    text,
    date,
    isMe,
    readed,   
    onRemoveMessage,

}) =>{

    return(
        
        <Msg className = {Type(isMe)}  >
            <MsgАvatar className ="msg__avatar">
                <Avatar user = {user}/>
            </MsgАvatar>
            <div className = 'message__content' >
                <Bubble className ="msg__bubble">
                    <Text lassName ="msg__text">
                        {text} 
                    </Text>
                </Bubble>
                <MsgDate className ="msg__date">
                    <span>
                        <Time date = {date}/>
                    </span>
                </MsgDate>
            </div>
        </Msg>
    )   

}

Message.defaultProps = {
    user: {}
}


Message.propTypes = {
    avatar: PropTypes.string,
    data: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.object,
    isMe: PropTypes.bool,
}

export default Message;