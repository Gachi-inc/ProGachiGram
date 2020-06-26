import React from 'react';
import PropTypes from 'prop-types' 
import {Empty} from '../Messenger/Messenger.styled'
import povertyIcon from '../../assets/png/poverty.png'
import {Loader, MessagesWrap} from './Message.styled'
import Message from "./Message"
import {TextArea} from "../Messenger/components/ChatName/ChatName.styles";
const Messages = ({
    onRemoveMessage,
    blockRef,
    isLoading,
    items,
    user,
    toUser,
    OnOpen,
    isOpen,
    value,
    setValue,
    SearchMessage,
    }) => { 

    return( 
        <MessagesWrap 
            ref={blockRef} 
            className = "messages">
                {/* <div className = "chat__searchbar">
                    <button className = "chat__searchbar-button" onClick={OnOpen}>
                        <img className = "chat__searchbar-icon" src = {searchSvg} alt = "searchIcon"/>
                    </button>
                </div> */}
                <React.Fragment>
                    <TextArea placeholder = "Введите текст сообщения" value={value} onChange={e => setValue(e.target.value)}></TextArea>
                    <button className="button__search" onClick={SearchMessage}>Поиск</button>
                    <button className="button__close" onClick={OnOpen}>Закрыть</button> 
                </React.Fragment>
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
                            ))
                    ) : (
                        <Empty>
                            <img className = "messages-empty" src = {povertyIcon} alt = "empty-icon"/>
                            <span>Диалог пуст!</span>
                        </Empty>
                        )
                    ) : (
                        <Empty>
                            <img className = "messages-empty" src = {povertyIcon} alt = "empty-icon"/>
                            <span>Откройте диалог</span>
                        </Empty>
                )}
        </MessagesWrap>
    )
}



Messages.propTypes = {
    items: PropTypes.array,
};

export default Messages;