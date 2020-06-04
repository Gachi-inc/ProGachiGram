import React from 'react';
import PropTypes from 'prop-types' 
import {Search, Empty} from '../Messenger/Messenger.styled'
import povertyIcon from '../../assets/png/poverty.png'

import Message from "./Message"

    const Messages = ({items}) => {  
    return items? (
    <React.Fragment>
        <Message
            avatar = "https://sun9-49.userapi.com/c850608/v850608927/827e1/cEmW2101YYI.jpg?ava=1"
            text = "Привет друх!"
            date = {new Date(2020, 4, 23)}
        />
        <Message
            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
            date = {new Date(2020, 4, 24)}
            isMe = {true}
        />
        <Message
            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
            date = {new Date(2020, 4, 24)}
            isMe = {true}
        />
        <Message
            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
            date = {new Date(2020, 4, 24)}
            isMe = {true}
        />
        <Message
            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
            date = {new Date(2020, 4, 24)}
            isMe = {true}
        />
        <Message
            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
            date = {new Date(2020, 4, 24)}
            isMe = {true}
        />
        <Message
            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
            date = {new Date(2020, 4, 24)}
            isMe = {true}
        />
        <Message
            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
            text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
            date = {new Date(2020, 4, 24)}
            isMe = {true}
        />
        
        <Message
            avatar = "https://sun9-49.userapi.com/c850608/v850608927/827e1/cEmW2101YYI.jpg?ava=1"
            text = "Мда, спасибо!"
            date = {new Date(2020, 4, 25)}
        />
        <Message
            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
            text = "Отлично поболтали"
            date = {new Date(2020, 4, 25)}
            isMe = {true}
        />
        <Message
            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
            text = "всегда приятно :)"
            date = {new Date(2020, 4, 25)}
            isMe = {true}
        />
        <Message
            avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
            text = "чего молчишь?"
            date = {new Date(2020, 4, 25)}
            isMe = {true}
        />
        <Message
            avatar = "https://sun9-49.userapi.com/c850608/v850608927/827e1/cEmW2101YYI.jpg?ava=1"
            text = "ээй!"
            date = {new Date(2020, 4, 25)}
            
        />
    </React.Fragment>):(
    <Empty>
        <img className = "messages-empty" src = {povertyIcon} alt = "empty-icon"/>
        <span>Нет сообщений</span>
    </Empty>) 
    
    }



Messages.propTypes = {
    items: PropTypes.array,
};

export default Messages;