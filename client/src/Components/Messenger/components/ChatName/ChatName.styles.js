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

export const TextArea = styled.input.attrs({
  type: 'input',
  })`
  max-width: 50%;
  background-color: var(--color-dark-translucent);
  color: white;
  border: 1px solid black;
  cursor: pointer;
  left: 74%;
  `;