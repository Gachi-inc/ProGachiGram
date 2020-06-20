import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"
import {messagesActions} from 'redux/actions'
import find from 'lodash/find';

import {Messages as BaseMessages} from "Components/Message/Messages"
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
    
    const messagesRef = useRef(null);

    const onNewMessage = data => {
        addMessage(data);
    };

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
            items={items}
            isLoading={isLoading && !user}
            onRemoveMessage={removeMessageById}
            // toUser={
            //   user.id !== currentDialog.toUser.id ? currentDialog.fromUser : currentDialog.toUser
            // }
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