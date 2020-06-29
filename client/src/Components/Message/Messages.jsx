import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types' 
import {Empty} from '../Messenger/Messenger.styled'
import povertyIcon from '../../assets/png/poverty.png'
import {
    Loader, 
    MessagesWrap, 
    TextArea,
    Searchfield,
    Button,
    ButtonRedirect
} from './Message.styled'
import Message from "./Message"

import searchSvg from "assets/svg/search.svg"
const Messages = ({
    onRemoveMessage,
    blockRef,
    isLoading,
    items,
    user,
    toUser,
    onOpen,
    onClose,
    isOpen,
    value,
    setValue,
    SearchMessage,
    scroll,
    selectedMessages,
    onSelect
    }) => {
        const [isRedirecting, SetRedirecting] = useState(false);
        useEffect(() => {
            console.log("search")
           if (!isOpen) {
            SearchMessage();
           }
           
        }, [isOpen])
    return( 
        <React.Fragment>
            {isOpen?(
                <React.Fragment>
                <Searchfield className= "search-field">
                    <TextArea placeholder = "Введите текст сообщения" value={value} onChange={e => setValue(e.target.value)}></TextArea>
                    <Button className="search-field-btn-search" onClick={SearchMessage}>Поиск</Button>
                    <Button className="search-field-btn-close" onClick={onClose}>Закрыть</Button> 
                </Searchfield>
                </React.Fragment>
            ) : (
                <Searchfield className = "search-field">
                    <Button className = "search-field-btn-open" onClick={onOpen}>
                        <img className = "search-field-icon" src = {searchSvg} alt = "searchIcon"/>
                    </Button>
                    <ButtonRedirect className = "redirect-button" isRedirecting={isRedirecting} onClick={() => {
                        if(selectedMessages.size !== 0) isRedirecting ? SetRedirecting(false) : SetRedirecting(true);
                    }}>Переслать</ButtonRedirect>
                </Searchfield>)
            }
            <MessagesWrap 
                ref={blockRef} 
                className = "messages">
                    
                    {isLoading ? (
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
                                    onClose = {onClose}
                                    id = {item._id}
                                    scroll = {scroll.bind(this, item._id)}
                                    //selectMessages = {selectedMessages}
                                    onSelect = {onSelect.bind(this, item)}
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
        </React.Fragment>
    )
}



Messages.propTypes = {
    items: PropTypes.array,
};

export default Messages;