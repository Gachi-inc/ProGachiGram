// import React, { Component} from 'react';
// import Message from "../../../Message/Message"
// import { 
//     Chat,
//     MsgField,
//     ExportMsgField,
//     ChatName,
//     IsOnline,
//     SearchBar
// } from './Chat.styles';
// import searchSvg from "assets/svg/search.svg"
// import sendSvg from "assets/svg/send.svg"
// import voiceSendSvg from "assets/svg/microphone.svg"

// export class ChatComponent extends Component{
    
//     render(){
//         const isOnline = true;
//         return(
//             <React.Fragment>
//                 <ChatName>
//                     <b className = "chat__username">
//                         Владимир
//                         <IsOnline>
//                         {isOnline? "online": ""}
//                         </IsOnline>
//                     </b>
//                     <div className = "chat__searchbar">
//                         <SearchBar/>
//                         <img src = {searchSvg} alt = "searchIcon"/>
//                     </div>
                    
//                 </ChatName>
                
//                 <Chat>
//                     <Message
//                         avatar = "https://sun9-49.userapi.com/c850608/v850608927/827e1/cEmW2101YYI.jpg?ava=1"
//                         text = "Привет друх!"
//                         date = {new Date(2020, 4, 23)}
//                     />
//                     <Message
//                         avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
//                         text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
//                         date = {new Date(2020, 4, 24)}
//                         isMe = {true}
//                     />
//                     <Message
//                         avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
//                         text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
//                         date = {new Date(2020, 4, 24)}
//                         isMe = {true}
//                     />
//                     <Message
//                         avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
//                         text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
//                         date = {new Date(2020, 4, 24)}
//                         isMe = {true}
//                     />
//                     <Message
//                         avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
//                         text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
//                         date = {new Date(2020, 4, 24)}
//                         isMe = {true}
//                     />
//                     <Message
//                         avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
//                         text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
//                         date = {new Date(2020, 4, 24)}
//                         isMe = {true}
//                     />
//                     <Message
//                         avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
//                         text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
//                         date = {new Date(2020, 4, 24)}
//                         isMe = {true}
//                     />
//                     <Message
//                         avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
//                         text = "Привет, другалёк, как у тебя дела? Сделал дз по Теории Сигналов?"
//                         date = {new Date(2020, 4, 24)}
//                         isMe = {true}
//                     />
                    
//                     <Message
//                         avatar = "https://sun9-49.userapi.com/c850608/v850608927/827e1/cEmW2101YYI.jpg?ava=1"
//                         text = "Мда, спасибо!"
//                         date = {new Date(2020, 4, 25)}
//                     />
//                     <Message
//                         avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
//                         text = "Отлично поболтали"
//                         date = {new Date(2020, 4, 25)}
//                         isMe = {true}
//                     />
//                     <Message
//                         avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
//                         text = "всегда приятно :)"
//                         date = {new Date(2020, 4, 25)}
//                         isMe = {true}
//                     />
//                     <Message
//                         avatar = "https://sun9-3.userapi.com/c856024/v856024817/1ea646/lC0Q1b3PPzc.jpg?ava=1"
//                         text = "чего молчишь?"
//                         date = {new Date(2020, 4, 25)}
//                         isMe = {true}
//                     />
//                     <Message
//                         avatar = "https://sun9-49.userapi.com/c850608/v850608927/827e1/cEmW2101YYI.jpg?ava=1"
//                         text = "ээй!"
//                         date = {new Date()}
                        
//                     />
//                 </Chat>
//                 <ExportMsgField>
//                     <MsgField/>
                    
//                     <img src = {voiceSendSvg} alt = "voiceSendIcon" />
//                     <img src = {sendSvg} alt = "sendIcon" />

//                 </ExportMsgField>
//             </React.Fragment>
//         )
//     }
// }