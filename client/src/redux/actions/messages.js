import { messagesApi } from "utils/api";

const Actions = {
  setMessages: items => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items
  }),
  addMessage: message => (dispatch, getState) => {
    const { dialogs } = getState();
    const { currentDialogId } = dialogs;
    if (currentDialogId === message.dialog._id) {
      dispatch({
        type: "MESSAGES:ADD_MESSAGE",
        payload: message
      });
    }
  },

  fetchSendMessage: ({ text, dialogId, attachments }) => dispatch => {
    return messagesApi.send(text, dialogId, attachments);
  },

  setIsLoading: bool => ({
    type: "MESSAGES:SET_IS_LOADING",
    payload: bool
  }),

  fetchResendMessage: ({dialogId}) => dispatch =>{
    return messagesApi.resend(dialogId)
  },

  removeMessageById: id => dispatch => {
    if (window.confirm("Вы действительно хотите удалить сообщение?")) {
      messagesApi
        .removeById(id)
        .then(({ data }) => {
          dispatch({
            type: "MESSAGES:REMOVE_MESSAGE",
            payload: id
          });
        })
        .catch(() => {
          dispatch(Actions.setIsLoading(false));
        });
    }
  },

  fetchMessages: dialogId => dispatch => {
    console.log("Запрос сообщений");
    dispatch(Actions.setIsLoading(true));
    messagesApi
      .getAllByDialogId(dialogId)
      .then(({ data }) => {
        dispatch(Actions.setMessages(data));
      })
      .catch(() => {
        dispatch(Actions.setIsLoading(false));
      });
  },

  setSelectedMessages: selectedArr =>({
    type: "MESSAGES:SET_SELECTED_MESSAGES",
    payload: selectedArr
  }),
  clearSelectedMessages: () =>({
    type: "MESSAGES:CLEAR_SELECTED_MESSAGES"
  }),

  setResentMessages: (messages, dialogId) => dispatch =>{
    console.log(dialogId);
    messages.map(message => {
      const text = `Пересланное сообщение \n\r\
      От: ${message.user.fullname} Текст: ${message.text}`;
      dispatch(Actions.fetchSendMessage({text, dialogId}));
    })
    dispatch(Actions.clearSelectedMessages());
  }
};

export default Actions;