import React from 'react';

import Dialogs from '../../containers/Dialogs'

import UsersSvg from 'assets/svg/users.svg'
import СreateDialSvg from 'assets/svg/create.svg'

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

    return (
        <React.Fragment >
            <div className="sidebar-content__header">
                <div>
                    <img src = {UsersSvg} alt = "group-icon"/>
                    <span>Список диалогов</span>
                </div>
                    <button><img src = {СreateDialSvg} alt = "create-icon"/></button>
            </div>

            <div className = "sidebar-content__dialogs">
            <Dialogs
                userId = {0}
                items = {[]}
            />
            </div>
        </React.Fragment>
    );
}

export default SideBar;