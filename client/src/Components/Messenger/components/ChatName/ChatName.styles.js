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