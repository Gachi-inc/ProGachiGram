import React from 'react';
import {IsOnline} from "./ChatName.styles";


const ChatNameComponent = ({
    online, 
    fullname,
}) => {
    return (
        <React.Fragment>
                <div className = "chat__dialog-header-center">
                    <div/>
                    <b className = "chat__dialog-header-username">{fullname}</b>
                    <div className = "chat__dialog-header-status">
                        <IsOnline className = {online? "status-online" : "status"}>
                            {online? "online" : "offline"}
                        </IsOnline>  
                    </div>
                </div>
        </React.Fragment> 
    );
}

export  {ChatNameComponent};