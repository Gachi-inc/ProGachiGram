
import React from 'react';
import {StyledMain} from './Main.styles';

import {Registrate} from '../Forms/Registrate';
import {Login} from '../Forms/Login';
import News from './../News/News';
import Messenger from './../Messenger/Messenger';
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";


const Main = props => {
    const { isAuth } = props;
    return (
    <StyledMain>
        <Switch> 
            <Route exact path="/signin" component={Login}/>
            <Route exact path="/signup" component={Registrate}/>
            <Route 
                path="/im" 
                render = {()=>(isAuth ? <Messenger/>: <Redirect to = "/signin"/>)}
            /> 

        </Switch>
    </StyledMain>
    );
}

export default connect(({user})=>({isAuth: user.isAuth}))(Main);