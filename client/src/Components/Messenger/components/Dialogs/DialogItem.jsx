import React from 'react';
import {DlgItm, UserАvatar, DlgItmInfo, DlgItmInfo__top, DlgItmInfo__bottom, IsOnline} from './DialogItem.styles';
// import  Time from '../../../Time/index'
import { format, isToday, isThisYear } from 'date-fns';
import { ru } from 'date-fns/locale';
import Avatar from "../Avatar"




const getMessageTime = created_at => {
    created_at = new Date(created_at);
    if (isToday(created_at)) {
        return format(created_at, 'HH:mm')
    }else 
        if(isThisYear(created_at)){
            return format(created_at, 'd MMM', {locale: ru})
    }else return format(created_at, 'd.M.yyyy')
}




const DialogItem = ({ _id, user, unreaded, created_at, text, isMe, onSelect}) =>{  
    return(
        
        <DlgItm className = "dialogs__item"
        onClick = {onSelect.bind(this, _id)}
        >
            <UserАvatar>
                <Avatar user = {user}/> 
                {user.isonline? <IsOnline/> : ""}
            </UserАvatar>
            <DlgItmInfo>
                <DlgItmInfo__top>
                    <b>
                        {user.fullname}
                    </b>
                    <span>
                        {getMessageTime(created_at)}
                        {/* <Time date = {message.created_at}/> */}
                    </span>
                </DlgItmInfo__top>
                <DlgItmInfo__bottom>
                    <p>
                        {text}
                    </p>
                    {/* иконка прочитанного сообщения */}
                    {/* {isMe && <IconReaded isMe = {true} isReaded = {false}/>} */}
                    {unreaded > 0 && (<div className= "dlgitminfo__bottom--counter">{unreaded > 99? "+99": unreaded}</div>)}
                </DlgItmInfo__bottom>
            </DlgItmInfo>
        </DlgItm>
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