import React, {useState, useEffect} from 'react';

import Dialogs from '../../containers/Dialogs'

import UsersSvg from 'assets/svg/users.svg'
import СreateDialSvg from 'assets/svg/create.svg'
import {
    ModalFooter,
    Modal,
    ModalWrapper,
    ModalBody,
} from '../../Messenger.styled'
import {StyledForms, FormInpt} from '../../../Forms/Forms.styles'

const SideBar = ({
    user,
    visible,
    inputValue,
    messageText,
    selectedUserId,
    isLoading,
    users,
    onShow,
    onClose,
    onSearch,
    onChangeInput,
    onSelectUser,
    onChangeTextArea,
    onModalOk,

}) => {
    const options = users.map(user => <option key={user._id}>{user.fullname}</option>)
    const [display, ChangeDisplay] = useState('display: none');
    //const select = document.getElementById("f")["Users"];
    useEffect(() => {
        visible? ChangeDisplay('none') : ChangeDisplay('flex');
        document.getElementById("menu").style.display = display;
    }, [visible]);
    useEffect(() =>{
        if(inputValue) onSearch(inputValue);
    }, [inputValue]);
    // useEffect(() => {
    //     if(select.value){
    //         onSelectUser(true);
    //     }
    // }, [select.value]);
    return (
        <React.Fragment >
            <div className="sidebar-content__header">
                <div>
                    <img src = {UsersSvg} alt = "group-icon"/>
                    <span>Список диалогов</span>
                </div>
                    <button onClick={onShow}><img src = {СreateDialSvg} alt = "create-icon"/></button>
            </div>

            <div className = "sidebar-content__dialogs">
            <Dialogs userId = {user && user._id}/>
            </div>
            <Modal id="menu"> 
                <ModalWrapper>
                    <h1 align="center">Создать диалог</h1>
                    <ModalBody>
                        <label>Введите имя пользователя или E-Mail</label><br/>
                        <StyledForms id="f">
                            <select name="Users" style={{width: "100%"}}>
                                {options}
                            </select>
                            <FormInpt type="text" name="search" placeholder="Введите имя пользователя или почту" value={inputValue} onChange={onChangeInput}/>
                        </StyledForms>
                        
                        { selectedUserId && (
                            <div>
                                <label>Введите текст сообщения</label>
                                <textarea autosize={{minRows: 3, maxRows: 10}} value={messageText} onChange={onChangeTextArea}></textarea>
                            </div>
                        )}
                            
                    </ModalBody>
                    <ModalFooter>
                        <button className="create" disabled={!messageText} onClick={onModalOk}>Создать</button>
                        <button className="close" onClick={onClose}>Закрыть</button>
                    </ModalFooter>
                </ModalWrapper>
            </Modal>
        </React.Fragment>
    );
}
export default SideBar;
