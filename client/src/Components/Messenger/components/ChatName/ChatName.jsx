import React from 'react';
import {ChatName, IsOnline} from "./ChatName.styles"

const ChatNameComponent = (online, fullname) => {

    return (
        <React.Fragment>
            <ChatName className = "chat__dialog-header">
                <div/>
                <div className = "chat__dialog-header-center">
                    {/* <b className = "chat__dialog-header-username">{fullname}</b> */}
                    <div className = "chat__dialog-header-status">
                        <IsOnline className = {online? "status-online" : "status"}>
                            {online? "online" : "offline"}
                        </IsOnline>  
                    </div>
                </div>
                <div className = "chat__searchbar">
                    {/* <button className = "chat__searchbar-button" 
                        onClick={() => this.openSearchMsg()}>
                        <img className = "chat__searchbar-icon" src = {searchSvg} alt = "searchIcon"/>
                    </button> */}
                </div>
            </ChatName>
                
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