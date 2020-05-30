import React from 'react';
import {Msg, Аvatar, Bubble, Text, MsgDate} from './Message.styled'
import PropTypes from 'prop-types' 
import  Time from '../Time/index'

const Type = (isMe) =>{
    return(
        isMe? Msg.clasName = "msg--isme": "msg"
        );   
}


const Message = ({avatar,user, text, date, isMe}) =>{  
    return(
        <Msg className = {Type(isMe)}>
            <Аvatar className ="msg__avatar">
                <img src = {avatar} alt = {`Avatar ${user}`}/>
            </Аvatar>
            <div className = 'message__content' >
                <Bubble className ="msg__bubble">
                    <Text lassName ="msg__text">
                        {text} 
                    </Text>
                </Bubble>
                <MsgDate lassName ="msg__date">
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
}

export default Message;