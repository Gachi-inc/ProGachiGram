import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {StyledForms, FormInpt, FormSbmt, HLetters} from './Forms.styles';
//import function send() from  '../../../server/routes/SendMailer.js';
//const SendMailer = require('../../../server/routes/SendMailer.js');
export class Registrate extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }
    render() {
      return (
          <Router>

            <StyledForms onSubmit={this.handleSubmit}>
              <HLetters>Регистрация</HLetters>
              <label> Логин:</label>
              <FormInpt type="text" placeholder="Введите логин" name="login" value={this.state.value} onChange={this.handleChange}/>
              <label> E-mail:</label>
              <FormInpt type="email" placeholder="Введите e-mail" name="Email"/>
              <label> Пароль:</label>
              <FormInpt type="password" placeholder="Введите пароль" name="password"/>
              <label> Повторите пароль:</label>
              <FormInpt type="password" placeholder="Повторите пароль" name="password"/>
              
              <FormSbmt value="Зарегистрироваться"/>

            </StyledForms>

          </Router>
      );
    }
}