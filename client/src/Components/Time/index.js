import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ru } from 'date-fns/locale';
import PropTypes from 'prop-types' 




const Time = ({date}) =>{
    return(
        <React.Fragment>
            {formatDistanceToNow(date, {locale: ru},{addSuffix: true})}
        </React.Fragment>
    )
}


export default Time;