import styled from 'styled-components';
import {NavLink as RouterLink} from 'react-router-dom';
export const StyledMessenger = styled.div`
  max-width: var(--content-width);
  display: block;
  align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: inline-block;
    max-width: var(--content-width);
`;

export const Section = styled.div`

margin: 0 auto;
max-width: var(--content-width);
padding: 0 var(--padding);
height: 300px;
`;

export const Chat = styled.div`
position: relative;
background-color: #ddd;
width: 50%;
float: left;
height: 400px;
border: 1px solid #333;
border-radius: 25px;
`;

export const ChatField = styled.div`
width: 100%;
position: absolute;
display: flex;
`;

export const MsgField = styled.textarea`
  margin: 0 auto;
  padding: 0 var(--padding);
  width: 80%; 
`;

// export const SideBar = styled.section`
// background-color: #333;
// width: 20%;
// float: left;
// border-bottom: 1px solid #333;
// `;

export const SideBar = styled.section`

  margin: 0 auto;
  width: 25%;
  color: white;
  border: 1px solid #333;
  border-radius: 25px;
  float: left; 
  // padding: 0 var(--padding);
`;
export const Body = styled.div`
  height: 100%;
  width: 50%;
  background-color: pink;
`;

export const NavLink = styled(RouterLink)`
  display: block;
  margin 10% auto;
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
  border-radius: 100px; 
  border: 3px solid green; 
  box-shadow: 0 0 7px #666;
  width: 50px; 
  height: 50px;
  margin 10px auto;
`

export const UserInfo = styled.div`
  margin: 0 var(--margin);
  top: 50%;
  font-size: var(--font-size-xs);
`