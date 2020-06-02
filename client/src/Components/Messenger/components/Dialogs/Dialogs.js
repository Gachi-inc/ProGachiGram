import React from 'react';
import DialogItem from './DialogItem'
import orderBy from 'lodash/orderBy'
import {Search} from '../../Messenger.styled'

const Dialogs = ({items, userId, onSearch, inputValue}) =>(  
        <div className = "dialogs">
            <Search className ="sidebar__search-dialog" 
                placeholder = "Поиск по названию диалога" 
                onChange = {e => onSearch(e.target.value)}
                value = {inputValue} 
            /> 

            {orderBy(items, ["created_at"], ["desc"]).map(item =>(
                <DialogItem 
                    key = {item._id}
                    isMe ={item.user._id === userId}
                    {...item}
                />
            ))}
        </div>
    );


export {Dialogs};
