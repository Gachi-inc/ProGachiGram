import styled from 'styled-components';
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

export const MenuForPhones = styled.label`
  background-color: var(--color-dark-translucent);
  padding: 2%;
  position: fixed;
  cursor: pointer;
  transition: left .23s;
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  z-index: 3;
  width: 7%;
`;

export const MenuInsides = styled.ul`
  display: block;
  position: fixed;
  list-style:none;
  padding: 3%;
  margin: 0;
  box-sizing: border-box;
  width: 7%;
  background-color: #eee;
  height: 100%;
  top: 0;
  left: -7%;
  transition: left .2s;
  z-index: 2;
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
`;

export const SpanStyle = styled.span`
  display: block;
  height: 3px;
  background-color: #fff;
  margin: 5px 0 0;
  transition: all .1s linear .23s;
  position: relative;
`;

export const In = styled.input`
  &:checked {
    left: 1.9%
  }
  display: none;
`;


