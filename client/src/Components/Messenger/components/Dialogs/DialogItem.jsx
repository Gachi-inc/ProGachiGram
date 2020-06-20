import React from 'react';
import {DlgItm, UserАvatar, DlgItmInfo, DlgItmInfoTop, DlgItmInfoBottom, IsOnline} from './DialogItem.styles';
// import  Time from '../../../Time/index'
import { format, isToday, isThisYear, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import Avatar from "../Avatar"
import { Link } from 'react-router-dom';



const getMessageTime = createdAt => {
    createdAt = parseISO(createdAt);
    if (isToday(createdAt)) {
        return format(createdAt, 'HH:mm')
    }else 
        if(isThisYear(createdAt)){
            return format(createdAt, 'd MMM', {locale: ru})
    }else return format(createdAt, 'd.M.yyyy')
}

const renderLastMessage = (message, userId) => {
    let text = message.text;
    return `${message.user._id === userId ? 'Вы: ' : ''}${text}`;
  };




const DialogItem = ({ 
    _id,
    unreaded,
    created_at,
    text,
    //isMe,
    //currentDialogId,
    lastMessage,
    userId,
    toUser,

    }) =>{  
    return(
        <Link to={`/im/dialog/${_id}`}>
            <DlgItm className = "dialogs__item"
            //onClick = {onSelect.bind(this, _id)}
            >
                <UserАvatar>
                    <Avatar user = {toUser}/> 
                    {toUser.isOnline? <IsOnline/> : ""}
                </UserАvatar>
                <DlgItmInfo>
                    <DlgItmInfoTop>
                        <b>
                            {toUser.fullname}
                        </b>
                        <span>
                            {getMessageTime(lastMessage.createdAt)}
                        </span>
                    </DlgItmInfoTop>
                    <DlgItmInfoBottom>
                        <p>
                            {renderLastMessage(lastMessage, userId)}
                        </p>
                        {/* isReaded = {lastMessage.readed} */}
                        {/* {isMe && <IconReaded isMe = {isMe} />} */}
                        {lastMessage.unreaded > 0 && (
                        <div className= "dlgitminfo__bottom--counter">
                            {lastMessage.unreaded > 99? "+99": lastMessage.unreaded}
                        </div>)}
                    </DlgItmInfoBottom>
                </DlgItmInfo>
            </DlgItm>
        </Link>
    )   
    
}

// Message.defaultProps = {
//     user: {}
// }


// Message.propTypes = {
//     avatar: PropTypes.string,
//     data: PropTypes.string,
//     text: PropTypes.string,
//     user: PropTypes.object,
// }

export default DialogItem;