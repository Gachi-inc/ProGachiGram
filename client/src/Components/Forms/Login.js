import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
//import '../App.css';
import {StyledForms, FormInpt, FormSbmt, HLetters} from './Forms.styles';
export class Login extends Component{
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
        //alert('Вы вошли как: ' + this.state.value);
        event.preventDefault();
      }
    render()
    {
      return (
        <Router> 
          
          <StyledForms method="POST" action="api/login">
            <HLetters>Вход</HLetters>
            <label> Логин/E-mail:</label>
            <FormInpt type="text" placeholder="Введите логин" name="login" value={this.state.value} onChange={this.handleChange}/>
            <label> Пароль:</label>
            <FormInpt type="password" placeholder="Введите пароль" name="password"/>
            
            <FormSbmt value="Войти"/>

          </StyledForms>


        </Router>
      );
    }
}