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
border: 1px solid white;
`;

export const NavLink = styled(RouterLink)`
margin-left: 20px;
border: 1px solid white;
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

/*export const MenuForPhones = styled.label`
  background-color: var(--color-dark-translucent);
  position: fixed;
  cursor: pointer;
  transition: left .23s;
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  z-index: 3;
  width: 7%;
`;*/