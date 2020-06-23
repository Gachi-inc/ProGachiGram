import styled from 'styled-components';
import { MsgDate } from '../../../Message/Message.styled';



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