import styled from 'styled-components';

export const StyledMessenger = styled.main`
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 0 var(--padding);
  text-align: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 var(--padding);
    display: inline-block;
    max-width: var(--content-width);
`;

export const Section = styled.div`
margin: 0 auto;
max-width: var(--content-width);
padding: 0 var(--padding);
height: 300px;
`;

export const Chat = styled.section`
background-color: #ddd;
width: 60%;
float: left;
border-bottom: 1px solid #333;
`;

export const ChatField = styled.div`
width: 100%;
align-items: center;
height: 100%;
display: flex;
`;

export const MsgField = styled.textarea`
margin: 20px;
height: 100%;
width: 100%; 
bottom:0;
`;

export const SideBar = styled.section`
background-color: #333;
width: 20%;
float: left;
border-bottom: 1px solid #333;
`;


