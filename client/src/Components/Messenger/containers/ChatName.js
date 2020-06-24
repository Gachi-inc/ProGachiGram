import React, {useState, useEffect} from "react";
import { ChatNameComponent as ChatNameBase } from "../components/ChatName/ChatName";
import { connect } from "react-redux";

const ChatName = ({ currentDialogId, user, dialogs }) => {
  const [isOpen, ChangeOpen] = useState(false);
  const OnOpen = () => {
    ChangeOpen(true);
  }
  const OnClose = () => {
    ChangeOpen(false);
  }

  if (!dialogs.length || !currentDialogId) {
    return null;
  }
  const currentDialogObj = dialogs.filter(
    dialog => dialog._id === currentDialogId
  )[0];
    console.log(currentDialogObj);
  let toUser = {};

  if (currentDialogObj.fromUser._id === user._id) {
    toUser = currentDialogObj.toUser;
  } else {
    toUser = currentDialogObj.fromUser;
  }
  return <ChatNameBase 
  online={toUser.isOnline} 
  fullname={toUser.fullname}
  OnOpen={OnOpen}
  OnClose={OnClose}
  isOpen={isOpen}/>;
};

export default connect(({ dialogs, user }) => ({
  dialogs: dialogs.items,
  currentDialogId: dialogs.currentDialogId,
  user: user.data
}))(ChatName);