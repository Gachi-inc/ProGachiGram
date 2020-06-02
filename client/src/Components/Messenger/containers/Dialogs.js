import React, { useState } from "react"
import {Dialogs as BaseDialogs} from "../components/Dialogs/Dialogs"

const Dialogs =({items, userId})=>{
    const [inputValue, setValue] = useState('');
    let filtered =Array.from(items);
    const onChangeInput = e =>{
        const value = e.target.value;
        filtered = filtered.filter(dialog => dialog.user.fullname.indexOf(value) >= 0);
        setValue(e.target.value)
    };

    return (
        <BaseDialogs 
            userId = {userId}
            items = {filtered} 
            onSearch = {onChangeInput} 
            searchValue = {inputValue}
        />
    );
};

export default Dialogs;