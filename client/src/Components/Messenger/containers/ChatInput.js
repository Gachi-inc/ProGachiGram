import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import socket from 'core/socket';

import { ChatInput as ChatInputBase } from '../../ChatInput/ChatInput';

import { messagesActions } from 'redux/actions';

const ChatInput = props => {
  const {
    dialogs: { currentDialogId },
    //attachments,
    fetchSendMessage,
    //setAttachments,
    //removeAttachment,
    user,
  } = props;

  const [value, setValue] = useState('');

  const sendMessage = () => {
    if (value ) {
      fetchSendMessage({
        text: value,
        dialogId: currentDialogId,
      });
      setValue('');
    }
  };

  const handleSendMessage = e => {
    socket.emit('DIALOGS:TYPING', { dialogId: currentDialogId, user });
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  


  return (
    <ChatInputBase
      value={value}
      setValue={setValue}
      handleSendMessage={handleSendMessage}
      sendMessage={sendMessage}
    />
  );
};

export default connect(
  ({ dialogs, user }) => ({
    dialogs,
    user: user.data, /// ЖДУ ОТПРАВКУ И КОННЕКТ С СЕРВЕРОМ НА ПРЕДМЕТ ЮЗЕРОВ
  }),
  { ...messagesActions },
)(ChatInput);