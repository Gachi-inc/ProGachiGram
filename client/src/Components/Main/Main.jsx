
import React, { Component } from 'react';
import {StyledMain} from './Main.styles';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Registrate} from '../../Components/Registrate';
import {Login} from '../../Components/Login';

export class Main extends Component{

    render(){
        return (
        <StyledMain>
            <h1>Добро Пожаловать!</h1>
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/registrate" component={Registrate}/>
            </Switch>
        </StyledMain>);
    }
}
