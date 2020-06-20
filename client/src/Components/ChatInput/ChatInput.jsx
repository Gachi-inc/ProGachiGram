import React from 'react';

import {ExportMsgField, MsgField} from "./ChatInput.styles";

import sendSvg from "assets/svg/send.svg"
import smileSvg from "assets/svg/smile.svg"

const ChatInput = props => {
    const {
        value,
        setValue,
        handleSendMessage,
        sendMessage,
        isLoading




      } = props;
    return (
        <React.Fragment>
            <ExportMsgField>
                <MsgField
                    rows="10" 
                    placeholder = "Введите текст сообщения"
                    onChange={e => setValue(e.target.value)}
                    onKeyUp={handleSendMessage}
                    placeholder="Введите текст сообщения…"
                    value={value}
                />
                
                    {/* <button className = "smileButton" >
                        <img src = {smileSvg} alt = "smileButton-icon"/>
                    </button> */}
                    <button 
                        className = "sendButton"
                        onClick={sendMessage}
                    >
                        <img src = {sendSvg} alt = "sendIcon" />
                    </button>    
            </ExportMsgField>
        </React.Fragment>
    );
}

export  {ChatInput};