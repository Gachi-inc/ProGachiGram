import React from 'react';
import PropTypes from 'prop-types' 
import {Empty} from '../Messenger/Messenger.styled'
import povertyIcon from '../../assets/png/poverty.png'
import {Loader, MessagesWrap} from './Message.styled'
import Message from "./Message"

const Messages = ({
    onRemoveMessage,
    blockRef,
    isLoading,
    items,
    user,
    toUser
    }) => { 

    return( 
        <MessagesWrap 
            ref={blockRef} 
            className = "messages">
                {isLoading && !user ? (
                    <Loader className = "lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <span>Загрузка...</span>
                    </Loader>
                ) : items && !isLoading? (
                    items.length > 0 ? (
                        items.map(item => (
                            <Message 
                            
                                {...item}
                                date = {item.createdAt}
                                isMe={user.id === item.user.id}
                                onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                                key = {item._id} 
                            />
                            ), )
                    ) : (
                        <Empty>
                            <img className = "messages-empty" src = {povertyIcon} alt = "empty-icon"/>
                            <span>Диалог пуст!</span>
                        </Empty>
                        )
                    ) : (
                        <Empty>
                            <img className = "messages-empty" src = {povertyIcon} alt = "empty-icon"/>
                            <span>Выберите диалог</span>
                        </Empty>
                )}
        </MessagesWrap>
    )
}



Messages.propTypes = {
    items: PropTypes.array,
};

export {Messages};