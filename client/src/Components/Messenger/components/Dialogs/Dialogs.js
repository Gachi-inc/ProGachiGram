import React from 'react';
import DialogItem from './DialogItem'
import orderBy from 'lodash/orderBy'
import {Search, Empty} from '../../Messenger.styled'
import povertyIcon from '../../../../assets/png/poverty.png'
const Dialogs = ({items, userId, onSearch, inputValue}) =>(  
        <div className = "dialogs">
            <Search className ="sidebar__search-dialog" 
                placeholder = "Поиск по названию диалога" 
                onChange = {e => onSearch(e.target.value)}
                value = {inputValue} 
            /> 

            {items.length?
                orderBy(items, ["created_at"], ["desc"]).map(item =>(
                    <DialogItem 
                        key = {item._id}
                        isMe ={item.user._id === userId}
                        {...item}
                    />
            )):(
                <Empty>
                    <img className = "dialogs-empty" src = {povertyIcon} alt = "empty-icon"/>
                    <span>Нет результатов</span>
                </Empty>
            )}
        </div>
    );


export {Dialogs};
