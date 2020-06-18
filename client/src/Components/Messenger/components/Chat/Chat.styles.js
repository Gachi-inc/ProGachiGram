import styled from 'styled-components';
import { MsgDate } from '../../../Message/Message.styled';

export const ChatName = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid rgba(191, 202, 245, .5);
  padding: 15px;
  background-color: white;
  color: #202020;

  .chat__dialog-header-center{
    text-align: center;
    position: relative;
  }

  .chat__dialog-header-username{  
    display: block;
    font-weight: 500;
  }
  button{
    cursor: pointer;
    background: #fff;
  }
  input{
    width: 100%;
  }

`
export const SearchBar = styled.input`

`



export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #202020;
  width: 100%;
  height: calc(100% - 156px);
  
`
export const IsOnline = styled.span`
  position: relative;
  color: #bfbfbf;
  :before{
    display:block;
    position: absolute;
    top: 10px;
    left: -8px;
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 30px;
    background-color: ${(props) => (props.className === "status-online" ? `var(--color-online)` : `var(--color-offline);`)};
  }

`

export const MsgField = styled.input`
  padding-left: 5%;
  height: 30px;
  width: 84%;
  border-radius: 10px;
`; 

export const ExportMsgField = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: var(--padding);

  button.smileButton{
    height: 21px;
    position: absolute;
    left: 37px;
    top: 30px;
    
    cursor: pointer;
    background: #fff;
  }

  button.smileButton + ${MsgField}{
    padding-left: 4px;
  }


  button.sendButton{
    height: 21px;
    cursor: pointer;
    background: #333;
  }

`


