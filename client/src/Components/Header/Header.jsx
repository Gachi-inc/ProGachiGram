import React, {Component, createContext, useState, useContext} from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import { userActions } from 'redux/actions';
import { 
    ActiveNavLink, Container, Logo, NavLink, StyledHeader,
    MenuForPhones, MenuInsides, Navbar, NavLinkMobile, SpanStyle
} from './Header.styles';
import { connect } from "react-redux";

//import News from './../News/News';


const Header= props =>{
    const {isAuth, userLogOut} = props;

    const handleClick = (e) =>{
        e.preventDefault();
        userLogOut();
    }

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
                    {isAuth?(
                        <nav>
                            <NavLink exact to="/" activeStyle={ActiveNavLink} >
                                <span onClick = {handleClick}>LogOut</span>
                            </NavLink>
                        </nav>
                    ):( 
                        <nav>
                            <NavLink exact to="/signup" activeStyle={ActiveNavLink}>
                            {'SignUp'}
                            </NavLink>
            
                            <NavLink exact to="/signin" activeStyle={ActiveNavLink}>
                                {'SignIn'}
                            </NavLink>
                        </nav>
                    )
                    }
                </Container>
        </MediaQuery>
    </StyledHeader> 
    )

}
export default connect(({user}) =>({isAuth: user.isAuth}),
        userActions,
    )(Header)
/* Для мобилок вспомогательный код */

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


const MenuContext = createContext(
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

NavState.propTypes = {
    children: PropTypes.node.isRequired,
};

const SideMenu = ({ children }) => {
    const {isMenuOpen} = useContext(MenuContext);

    return <MenuInsides open={isMenuOpen}>
                <NavLinkMobile exact to="/" activeStyle={ActiveNavLink}>{'Start'}</NavLinkMobile>
                {/* <NavLinkMobile exact to="/im" activeStyle={ActiveNavLink}>{'Messenger'}</NavLinkMobile> */}
                <NavLinkMobile exact to="/signup" activeStyle={ActiveNavLink}>{'SignUp'}</NavLinkMobile>
                <NavLinkMobile exact to="/signin" activeStyle={ActiveNavLink}>{'SignIn'}</NavLinkMobile>
           </MenuInsides>;
}

const MainMenu = () => {
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
