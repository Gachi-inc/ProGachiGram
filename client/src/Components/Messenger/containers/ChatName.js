import React, {useState} from "react";
import { ChatNameComponent as ChatNameBase } from "../components/ChatName/ChatName";
import { connect } from "react-redux";

const ChatName = ({ currentDialogId, user, dialogs}) => {

  if (!dialogs.length || !currentDialogId) {
    return null;
  }
  const currentDialogObj = dialogs.filter(
    dialog => dialog._id === currentDialogId
  )[0];
  let toUser = {};

  if (currentDialogObj.fromUser._id === user._id) {
    toUser = currentDialogObj.toUser;
  } else {
    toUser = currentDialogObj.fromUser;
  }
  return <ChatNameBase 
  online={toUser.isOnline} 
  fullname={toUser.fullname}/>
};

export default connect(({ dialogs, user}) => ({
  dialogs: dialogs.items,
  currentDialogId: dialogs.currentDialogId,
  user: user.data,
}))(ChatName);