import React, {useState, useEffect} from 'react';
import {ChatName, IsOnline, TextArea} from "./ChatName.styles";
import searchSvg from "assets/svg/search.svg"

const ChatNameComponent = ({
    online, 
    fullname,
    OnOpen,
    isOpen,
    value,
    setValue,
}) => {
    const [display, ChangeDisplay] = useState('display: none');
    return (
        <React.Fragment>
            <div/>
            {isOpen? (
                <React.Fragment>
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
                            <img className = "chat__searchbar-icon" src = {searchSvg} alt = "searchIcon"/>
                        </button>
                    </div>
                </React.Fragment> 
            ) : (
                <React.Fragment>
                    <TextArea placeholder = "Введите текст сообщения" value={value} onChange={e => setValue(e.target.value)}></TextArea>
                    <button className="button__search">Поиск</button>
                    <button className="button__close" onClick={OnOpen}>Закрыть</button> 
                </React.Fragment>
            )}
        </React.Fragment> 
    );
}

export  {ChatNameComponent};