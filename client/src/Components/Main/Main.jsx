
import React, { Component } from 'react';
import {StyledMain} from './Main.styles';
import {Switch, Route} from 'react-router-dom';
import {Registrate} from '../Forms/Registrate';
import {Login} from '../Forms/Login';
import News from './../News/News';
import Messenger from './../Messenger/Messenger';
export class Main extends Component{
    render(){
        return (
        <StyledMain>
            <Switch> 
                <Route path="/login" component={Login}/>
                <Route path="/registrate" component={Registrate}/>
                <Route path="/im" component={Messenger}/>
                <Route path="/" component={News}/>
            </Switch>
        </StyledMain>);
    }
}
