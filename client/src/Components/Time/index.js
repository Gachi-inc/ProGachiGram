import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ru } from 'date-fns/locale';


const Time = ({date}) =>{
    return(
        <React.Fragment>
            {formatDistanceToNow(new Date(), {locale: ru},{addSuffix: true})}
        </React.Fragment>
    )
}


export default Time;