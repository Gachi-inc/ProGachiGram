
import React, { Component } from 'react';
import {StyledMain} from './Main.styles';
import {Switch, Route} from 'react-router-dom';
import {Registrate} from '../Forms/Registrate';
import {Login} from '../Forms/Login';
import News from '../../Components/News/News';
import Messenger from './../Messenger/Messenger';
export class Main extends Component{

    render(){
        return (
        <StyledMain>
            <h1>Добро Пожаловать!</h1>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/registrate" component={Registrate}/>
                <Route path="/app" component={Messenger}/>
                <Route path="/" component={News}/>
            </Switch>
        </StyledMain>);
    }
}
