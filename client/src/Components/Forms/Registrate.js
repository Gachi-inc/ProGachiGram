import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {StyledForms, FormInpt, FormSbmt, HLetters} from './Forms.styles';

export class Registrate extends Component{
  
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      //Отправка данных на сервер для посылания сообщений на почту. Тестирую, пока в стадии написания. 
      //Пока даже не в стадии тестирования отправки с сервера на email
      //
      handleSend(response){
        response.send(Buffer.from(<FormInpt type ="email"></FormInpt>))
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

            <StyledForms method="POST" action="api/registrate">
              <HLetters>Регистрация</HLetters>
              <label> Логин:</label>
              <FormInpt type="text" placeholder="Введите логин" name="login" value={this.state.value} onChange={this.handleChange}/>
              <label> E-mail:</label>
              <FormInpt type="email" placeholder="Введите e-mail" name="email"/>
              <label> Пароль:</label>
              <FormInpt  type="password" placeholder="Введите пароль" name="password"/>
              <label> Повторите пароль:</label>
              <FormInpt type="password" placeholder="Повторите пароль" name="passwordCheck"/>
              
              <FormSbmt value="Зарегистрироваться" /*onClick = {this.handleSend(email)}*//>

            </StyledForms>

          </Router>
      );
    }
}