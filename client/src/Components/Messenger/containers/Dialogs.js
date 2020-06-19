import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import socket from "core/socket"

import {dialogsActions} from 'redux/actions'
import {Dialogs as BaseDialogs} from "../components/Dialogs/Dialogs"

const Dialogs = ({ fetchDialogs, updateReadedStatus, currentDialogId, items, userId }) => {
    const [inputValue, setValue] = useState('');
    const [filtred, setFiltredItems] = useState(Array.from(items));
  
    const onChangeInput = (value = '') => {
      setFiltredItems(
        items.filter(
          dialog =>
            dialog.fromUser.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
            dialog.ToUser.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0,
        ),
      );
      setValue(value);
    };
  
    window.fetchDialogs = fetchDialogs;
  
    useEffect(() => {
      if (items.length) {
        onChangeInput();
      }
    }, [items]);
  
    useEffect(() => {
      fetchDialogs();
  
      socket.on('SERVER:DIALOG_CREATED', fetchDialogs);
      socket.on('SERVER:NEW_MESSAGE', fetchDialogs);
      socket.on('SERVER:MESSAGES_READED', updateReadedStatus);
      return () => {
        socket.removeListener('SERVER:DIALOG_CREATED', fetchDialogs);
        socket.removeListener('SERVER:NEW_MESSAGE', fetchDialogs);
      };
    }, []);
  
    return (
      <BaseDialogs
        userId={userId}
        items={filtred}
        onSearch={onChangeInput}
        inputValue={inputValue}
        currentDialogId={currentDialogId}
      />
    );
  };
  
  export default connect(
    ({ dialogs }) => dialogs,
    dialogsActions,
  )(Dialogs);
  