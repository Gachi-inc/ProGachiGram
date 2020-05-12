import styled from 'styled-components';
import {NavLink as RouterLink} from 'react-router-dom';
export const StyledMessenger = styled.div`
  max-width: var(--content-width);
  display: inline-block;
  align-items: center;
  width: 100%;
`;

export const Chat = styled.div`
position: relative;
background-color: #ddd;
width: 50%;
float: left;
height: 400px;
`;

export const WrapperMsgField = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const MsgField = styled.input`
  margin: 4% 2%;
  padding-left: 4%;
  width: 80%;
  border-radius: 25px;
`;

export const SendButton = styled.button`
display: inline-block;
margin-right: 7%;
width: 27px;
height: 27px;
background-color: var(--color-accent);
cursor: pointer;
border-radius: 50%;
box-shadow: 0 3px 20px rgba(0,0,0,.25),
inset 0 2px 0 rgba(255,255,255,.6),
0 2px 0 rgba(0,0,0,.1),
inset 0 0 20px rgba(0,0,0,.1);
`

export const ButtonImg = styled.i`
`

export const SideBar = styled.section`
  width: 25%;
  color: white;
  float: left; 
  display: grid;
`;

export const NavLink = styled(RouterLink)`
  justify-self: center;
  align-self: center;
  margin-top: 10%;
`;

export const ActiveNavLink = {
  boxShadow: '0px 3px 0 0 var(--color-accent)',
};

export const User = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 0 var(--padding);
`

export const Avatar = styled.img`
  margin: 0 var(--margin);
  border-radius: 100%; 
  border: 3px solid green; 
  box-shadow: 0 0 7px #666;
  width: 50px; 
  height: 50px;
  margin 10px auto;
`

export const UserInfo = styled.div`
  margin: 0 var(--margin);
  font-size: var(--font-size-xs);
`