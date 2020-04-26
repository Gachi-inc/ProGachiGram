import styled, {css} from 'styled-components';
import {NavLink as RouterLink} from 'react-router-dom';
export const ActiveNavLink = {
    boxShadow: '0px 3px 0 0 var(--color-accent)',
  };
  
export const Container = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
height: 100%;
margin: 0 auto;
max-width: var(--content-width);
padding: 0 var(--padding);
`;

export const Logo = styled.div`
font-size: var(--font-size-l);
font-weight: 700;
letter-spacing: -1px;
`;

export const NavLink = styled(RouterLink)`
margin-left: 20px;
`;

export const StyledHeader = styled.header`
  backdrop-filter: blur(5px);
  background-color: var(--color-dark-translucent);
  height: 60px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

// MOBILE

export const MenuForPhones = styled.button`
  display: block;
  float: left;
  margin-right: 20px;
  margin-top: 8px;
  outline: 0;
  border: 0;
  padding: 2px;
  background: none;
`;

export const MenuInsides = styled.nav`
  position: absolute;
  top: 59px;
  left: 0px;
  bottom: 0px;
  width: 120px;
  max-width: 100%;
  padding-right: 0px;
  height: max-content;
  background-color: var(--color-dark-translucent); /* Сделать норм цвет */
  transform: translateX(-500%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const NavLinkMobile = styled(RouterLink)`
  position: relative;
  display: block;
  border-bottom: 1px solid #c2d6d6; 
  text-align: left;
  padding-top: 12px;
  padding-left: 10px;
  text-decoration: none;
`;

export const SpanStyle = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  margin-bottom: 7px;
  background-color: #fff;
`;

export const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: var(--color-dark-translucent) none repeat scroll 0% 0%; /* Цвет для хедера */
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;


