import React from 'react';
import {Msg, MsgАvatar, Bubble, Text, MsgDate} from './Message.styled'
import PropTypes from 'prop-types' 
import  Time from '../Time/index'
import Avatar from '../Messenger/components/Avatar'

const Type = (isMe) =>{
    return(
        isMe? Msg.clasName = "msg--isme": "msg"
        );   
}


const Message = ({
    //user, 
    text, 
    // date, 
    // isMe,
    //  _id 
}) =>{

    return(
        // className = {Type(isMe), _id}
        <Msg   >
            <MsgАvatar className ="msg__avatar">
                {/* <Avatar user = {user}/> */}
            </MsgАvatar>
            <div className = 'message__content' >
                <Bubble className ="msg__bubble">
                    <Text lassName ="msg__text">
                        {text} 
                    </Text>
                </Bubble>
                <MsgDate lassName ="msg__date">
                    <span>
                        <Time date = {new Date}/>
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