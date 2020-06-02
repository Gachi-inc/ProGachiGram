import React, { useState } from "react"
import {Dialogs as BaseDialogs} from "../components/Dialogs/Dialogs"

const Dialogs =({items, userId})=>{
    const [inputValue, setValue] = useState('');
    const [filtered, setFilteredItems] = useState(Array.from(items));

    const onChangeInput = value =>{
        setFilteredItems(
            items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0));
        setValue(value);
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