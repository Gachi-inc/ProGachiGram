import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import socket from "core/socket"

import {dialogsActions} from 'redux/actions'
import {Dialogs as BaseDialogs} from "../components/Dialogs/Dialogs"

const Dialogs =({fetchDialogs, setCurrentDialogId, items, userId})=>{
    const [inputValue, setValue] = useState('');
    const [filtered, setFilteredItems] = useState(Array.from(items));

    const onChangeInput = value =>{
        setFilteredItems(
            items.filter(
                dialog => 
                    dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
                )
            );
        setValue(value);
    };

    useEffect(()=>{
        if (!items.length){
            fetchDialogs();
        } else {
           setFilteredItems(items) 
        }
    }, [items]);

    socket.on('SERVER:DIALOG_CREATED', () => {
        fetchDialogs();
    });

    return (
        <BaseDialogs 
            userId = {userId}
            items = {filtered} 
            onSearch = {onChangeInput} 
            searchValue = {inputValue}
            onSelectDialog = {setCurrentDialogId}
        />
    );
};

export default connect(
    ({ dialogs }) => dialogs,
 dialogsActions
 )(Dialogs);