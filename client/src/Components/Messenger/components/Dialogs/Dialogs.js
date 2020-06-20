import React from 'react';
import DialogItem from './DialogItem'
import orderBy from 'lodash/orderBy'
import {Search, Empty} from '../../Messenger.styled'
import mailboxIcon from '../../../../assets/svg/mailbox.svg'
const Dialogs = ({items, userId, onSearch, inputValue, onSelectDialog}) =>(  
        <div className = "dialogs">
            <Search className ="sidebar__search-dialog" 
                placeholder = "Поиск по названию диалога" 
                onChange = {e => onSearch(e.target.value)}
                value = {inputValue} 
            /> 

            {items.length?
                orderBy(items, ["created_at"], ["desc"]).map(item =>(
                    <DialogItem 
                        onSelect = {onSelectDialog}
                        key = {item._id}
                        isMe ={item.fromUser._id === userId}
                        toUser =  {item.fromUser._id === userId? item.toUser : item.fromUser}
                        {...item}
                    />
            )):(
                <Empty>
                    <img className = "dialogs-empty" src = {mailboxIcon} alt = "empty-icon"/>
                    <span>Нет результатов</span>
                </Empty>
            )}
        </div>
    );


export {Dialogs};
