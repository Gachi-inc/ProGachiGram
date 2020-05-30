import styled from 'styled-components';

export const ChatName = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(191, 202, 245, .5);
  padding: 15px;
  background-color: white;
  text-align: center;
  color: #202020;
  div.chat__username{
    display: flex;
    flex-direction: column;
    flex: 1;
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
  padding: var(--padding);
  overflow: auto;
  
`
export const IsOnline = styled.span`
  font-size: 12px;
  color: blue;
`

export const ExportMsgField = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: var(--padding);
`

export const MsgField = styled.input`
  padding-left: 2%;
  height: 30px;
  width: 84%;
  border-radius: 10px;
`;
