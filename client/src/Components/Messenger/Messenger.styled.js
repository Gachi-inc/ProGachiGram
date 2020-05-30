import styled from 'styled-components';
import {NavLink as RouterLink} from 'react-router-dom';
export const StyledMessenger = styled.div`
  max-width: var(--content-width);
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--padding);
`;

// export const Chat = styled.div`
// position: relative;
// background-color: var(--color-dark);
// width: 50%;
// float: left;
// height: 500px;
// display: flex;
// align-items: center;
// `;



export const SendButton = styled.button`
display: inline-block;
margin-right: 5%;
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

export const NavLink = styled(RouterLink)`
  margin-top: 10%;
`;

export const ActiveNavLink = {
  boxShadow: '0px 3px 0 0 var(--color-accent)',
};

export const User = styled.div`
  align-items: center;
  display: flex;
`

export const Avatar = styled.img`
  border-radius: 50px; 
  height: 50px;
  width: 50px;
  margin-right: 10px;
`

export const UserInfo = styled.div`
  font-size: var(--font-size-xs);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
`

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 300px);
  height: 500px;
`

export const SideBar = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  padding-right: 10px;
`

