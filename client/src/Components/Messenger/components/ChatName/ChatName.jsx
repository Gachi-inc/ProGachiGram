import React, {useState, useEffect} from 'react';
import {ChatName, IsOnline} from "./ChatName.styles";
import {Modal as SearchArea} from "../../../SearchMsg/SearchMsg"
const ChatNameComponent = ({
    online, 
    fullname,
    OnOpen,
    OnClose,
    isOpen,
}) => {
    
    /*useEffect(() =>{
        isOpen? 

    }, [isOpen])*/
    return (
        <React.Fragment>
                <div/>
                <div className = "chat__dialog-header-center">
                    <b className = "chat__dialog-header-username">{fullname}</b>
                    <div className = "chat__dialog-header-status">
                        <IsOnline className = {online? "status-online" : "status"}>
                            {online? "online" : "offline"}
                        </IsOnline>  
                    </div>
                </div>
                <div className = "chat__searchbar">
                    <button className = "chat__searchbar-button" onClick={OnOpen}>
                        <img className = "chat__searchbar-icon" /*src = {searchSvg}*/ alt = "searchIcon"/>
                    </button>
                </div>
                
            {/* // <ChatName>
            //     <SearchMsg 
            //     isOpen={this.state.isSearchMsgOpen}
            //     onClose={() => this.closeSearchMsg()}>
            //         <input type="text" placeholder = "введите текст сообщения"/> 
            //     </SearchMsg>
            // </ChatName>
            //} */}
        </React.Fragment>
    );
}

export  {ChatNameComponent};