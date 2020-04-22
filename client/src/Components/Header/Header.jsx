import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import { 
    ActiveNavLink,
    Container,
    Logo,
    NavLink,
    StyledHeader,
    SpanStyle,
    In,
    MenuForPhones,
    MenuInsides,
} from './Header.styles';


export class Header extends Component{
    goSlow(){
        if(this.props.In.checked)
            {
                this.props.MenuForPhones.style = "left: 1.9%";
                this.props.MenuInsides.style = "left: 0";
            }               
    }
    render(){
        return(
            <StyledHeader>
                <Container>
                    {<MediaQuery maxDeviceWidth={1000}>
                    <In type="checkbox"/>
                    <MenuForPhones for="hmt">
                            <SpanStyle></SpanStyle>
                            <SpanStyle></SpanStyle>
                            <SpanStyle></SpanStyle>
                    </MenuForPhones>
                    <MenuInsides>
                            <NavLink exact to="/" activeStyle={ActiveNavLink}>{'Start'}</NavLink>
                            <NavLink exact to="/app" activeStyle={ActiveNavLink}>{'Messenger'}</NavLink>
                            <NavLink exact to="/registrate" activeStyle={ActiveNavLink}>{'SingIn'}</NavLink>
                            <NavLink exact to="/login" activeStyle={ActiveNavLink}>{'LogIn'}</NavLink>
                    </MenuInsides>
                    <Logo>ProGachiGram</Logo>
                    </MediaQuery>}
                    {<MediaQuery minDeviceWidth={1000}>
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
                     </MediaQuery>}      
                </Container>
            </StyledHeader>
        )
    }
}