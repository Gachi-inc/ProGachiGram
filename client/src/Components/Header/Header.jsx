import React, { Component } from 'react';
//import MediaQuery from 'react-responsive'
import { 
    ActiveNavLink,
    Container,
    Logo,
    NavLink,
    StyledHeader,
} from './Header.styles';


export class Header extends Component{
    render(){
        return(
            <StyledHeader>
                <Container>
                    <Logo>ProGachiGram</Logo>
                    {/*<MediaQuery maxDeviceWidth={1000}>
                        <input type="checkbox" id="hmt" class="hidden-menu-ticker"/>
                        <MenuForPhones for="hmt">
                            <span></span>
                            <span></span>
                            <span></span>
                        </MenuForPhones>
                        <ul>
                            <NavLink exact to="/" activeStyle={ActiveNavLink}>{'Start'}</NavLink>
                            <NavLink exact to="/app" activeStyle={ActiveNavLink}>{'Messenger'}</NavLink>
                            <NavLink exact to="/registrate" activeStyle={ActiveNavLink}>{'SingIn'}</NavLink>
                            <NavLink exact to="/login" activeStyle={ActiveNavLink}>{'LogIn'}</NavLink>
                        </ul>
        </MediaQuery>*/}
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
            </StyledHeader>
        )
    }
}