import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ru } from 'date-fns/locale';
import { parseISO } from 'date-fns';


const Time = ({date}) =>{
    return(
        <React.Fragment>
            {formatDistanceToNow(parseISO(date), {locale: ru},{addSuffix: true})}
        </React.Fragment>
    )
}


export default Time;