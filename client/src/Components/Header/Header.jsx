import React, { Component, createContext, useState, useContext, useRef} from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import { 
    ActiveNavLink, Container, Logo, NavLink, StyledHeader,
    MenuForPhones, MenuInsides, Navbar, NavLinkMobile, SpanStyle
} from './Header.styles';


export class Header extends Component{

    render(){
        return(
        <StyledHeader>
            <MediaQuery maxDeviceWidth={1000}>
                <NavState>
                    <MainMenu/>
                </NavState>
            </MediaQuery>
            <MediaQuery minDeviceWidth={1000}>
                    <Container>
                        <Logo>ProGachiGram</Logo>
                        <nav>
                            <NavLink exact to="/" activeStyle={ActiveNavLink}>
                                {'Start'}
                            </NavLink>

                            <NavLink exact to="/app" activeStyle={ActiveNavLink}>
                                {'Messenger'}
                            </NavLink>

                            <NavLink exact to="/registrate" activeStyle={ActiveNavLink}>
                                {'SingIn'}
                            </NavLink>

                            <NavLink exact to="/login" activeStyle={ActiveNavLink}>
                                {'LogIn'}
                            </NavLink>
                        </nav> 
                    </Container>
            </MediaQuery>
        </StyledHeader> 
        )
    }
}

{/* Для мобилок вспомогательный код */}

const HamburgerButton = () => {
    const {isMenuOpen, toggleMenuMode} = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
    };
    return(
        <MenuForPhones className={isMenuOpen ? 'active' : ''} aria-label="Открыть главное меню" onClick={clickHandler}>
            <SpanStyle/>
            <SpanStyle/>
            <SpanStyle/>
        </MenuForPhones>
    );
};


export const MenuContext = createContext(
    {
        isMenuOpen: true,
        toggleMenu: () => {},
    }
);

const NavState = ({children}) => {
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode(){
        toggleMenu(!isMenuOpen);
    }

    return (
    <MenuContext.Provider value={{isMenuOpen, toggleMenuMode}}>{children}</MenuContext.Provider>
    );
};

export const SideMenu = () => {
    const {isMenuOpen} = useContext(MenuContext);

    return <MenuInsides open={isMenuOpen}>
                <NavLinkMobile exact to="/" activeStyle={ActiveNavLink}>{'Start'}</NavLinkMobile>
                <NavLinkMobile exact to="/app" activeStyle={ActiveNavLink}>{'Messenger'}</NavLinkMobile>
                <NavLinkMobile exact to="/registrate" activeStyle={ActiveNavLink}>{'SingIn'}</NavLinkMobile>
                <NavLinkMobile exact to="/login" activeStyle={ActiveNavLink}>{'LogIn'}</NavLinkMobile>
           </MenuInsides>;
}

NavState.propTypes = {
    children: PropTypes.node.isRequired,
};

  const MainMenu = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    return (  
    <StyledHeader>
        <Container>
            <Navbar>
                <HamburgerButton />
                <Logo>ProGachiGram</Logo> 
            </Navbar>
            <SideMenu />
        </Container> 
    </StyledHeader>
    );
  };
