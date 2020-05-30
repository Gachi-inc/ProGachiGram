import React from 'react';
import {DlgItm, UserАvatar, DlgItmInfo, DlgItmInfo__top, DlgItmInfo__bottom, IsOnline} from './DialogItem.styles';
// import  Time from '../../../Time/index'
import { format, isToday, isThisYear } from 'date-fns';
import { ru } from 'date-fns/locale';

const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, 'HH:mm')
    }else 
        if(isThisYear(created_at)){
            return format(created_at, 'd MMM', {locale: ru})
    }else return format(created_at, 'd.M.yyyy')
}


const getAvatar = (avatar, user) =>{
  if (avatar) {
      return(
        <img 
            src= {avatar} 
            alt= { `${user.fullname} avatar`} 
        />
      ) 
      
      
  } else {

  }
}


const DialogItem = ({ user, unreaded, created_at, text, isMe}) =>{  
    return(
        
        <DlgItm >
            <UserАvatar>
                {getAvatar(user.avatar, user) }
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