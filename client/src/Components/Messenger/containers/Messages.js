/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"
import {messagesActions} from 'redux/actions'
import find from 'lodash/find';

import {Messages as BaseMessages} from "Components/Message"
import {Empty} from '../Messenger.styled'
import povertyIcon from 'assets/png/poverty.png'

import socket from "core/socket"


const Dialogs =({ 
    currentDialog, 
    fetchMessages, 
    items,
    user, 
    isLoading,
    removeMessageById, 
    addMessage,
    })=>{
    if (!currentDialog) {
        return (
        <Empty>
            <img className = "messages-empty" src = {povertyIcon} alt = "empty-icon"/>
            <span>Выберите диалог</span>
        </Empty>
        )
    }
    const [isOpen, ChangeOpen] = useState(true);
    const [value, setValue] = useState('');
    const [filtred, setSearchItems] = useState(Array.from(items));

    const OnOpen = () => {
        if(!isOpen) setValue('');
        isOpen? ChangeOpen(false) : ChangeOpen(true);
    }

    const SearchMessage = () =>{
        setSearchItems(
            items.filter(
                message => 
                message.text.toLowerCase().indexOf(value.toLowerCase()) >= 0
            ),
        );
    }
    const messagesRef = useRef(null);

    const onNewMessage = data => {
        addMessage(data);
    };

    useEffect(() => {
        if (items.length) {
            SearchMessage();
        }
      }, [items]);


    useEffect(()=>{
        if(currentDialog){
            fetchMessages(currentDialog._id);
        }

        socket.on('SERVER:NEW_MESSAGE', onNewMessage);

        return () => socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
    }, [currentDialog]);




    useEffect(()=>{ 
        messagesRef.current.scrollTo(0, 999999);
    }, [items]);

    return (
        <BaseMessages 
            user={user}
            blockRef={messagesRef}
            items={filtred}
            isLoading={isLoading && !user}
            onRemoveMessage={removeMessageById}
            OnOpen={OnOpen}
            isOpen={isOpen}
            value={value}
            setValue={setValue}
            SearchMessage={SearchMessage}
            toUser={
                user._id !== currentDialog.toUser._id ? currentDialog.fromUser : currentDialog.toUser
              }
        />
    );
};

export default connect(
    ({ dialogs, messages, user }) => ({ 
        currentDialog: find(dialogs.items, { _id: dialogs.currentDialogId }), 
        items: messages.items, 
        isLoading: messages.isLoading,
        user: user.data,
    }),
    messagesActions
 )(Dialogs);