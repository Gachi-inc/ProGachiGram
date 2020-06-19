import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {StyledForms, FormInpt, FormSbmt, HLetters} from './Forms.styles';
import axios from '../../core/axios';

export class Registrate extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
          FormVarR: {
            fullname: "",
            email: "",
            password: "",
            //passwordCheck: ""
          },
          DataRequestR: {}
        };
        this.GetPost = this.GetPost.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangePassCh = this.handleChangePassCh.bind(this);
      }
      handleChangeLogin(event) {
        this.setState({FormVarR: 
          {
            fullname: event.target.value,
            email: this.state.FormVarR.email,
            password: this.state.FormVarR.password,
            //passwordCheck: this.state.FormVarR.passwordCheck
          }});
          console.log(this.state.FormVarR);
      }
      handleChangeEmail(event) {
        this.setState({FormVarR: 
          {
            fullname: this.state.FormVarR.fullname,
            email: event.target.value,
            password: this.state.FormVarR.password,
            //passwordCheck: this.state.FormVarR.passwordCheck
          }});
      }
      handleChangePass(event) {
        this.setState({FormVarR: 
          {
            fullname: this.state.FormVarR.fullname,
            email: this.state.FormVarR.email,
            password: event.target.value,
            //passwordCheck: this.state.FormVarR.passwordCheck
          }});
      }
      handleChangePassCh(event) {
        this.setState({FormVarR: 
          {
            fullname: this.state.FormVarR.fullname,
            email: this.state.FormVarR.email,
            password: this.state.FormVarR.password,
            //passwordCheck: event.target.value
          }});
      }
      //Отправка данных на сервер для посылания сообщений на почту. Тестирую, пока в стадии написания. 
      //Пока даже не в стадии тестирования отправки с сервера на email
      //
      handleSend(response){
        response.send(Buffer.from(<FormInpt type ="email"></FormInpt>))
      }
      async GetPost(event){
        event.preventDefault();
        console.log(this.state);
        alert('Проверка введённых данных...Подождите...');
        console.log(this.state.FormVarR);
        await axios.post('api/user/signup', this.state.FormVarR)
        .then(res => {
          this.setState({DataRequestR: res.data});
          if(res.data.error)
            alert(res.data.errorMessage);
          else {
            /*await axios.post('/api/sendmailer', )*/
            document.getElementById('FormR').submit();
          }
        }).catch(err => console.log('error:', err));
      }

    render() {
      return (
        
          <Router>

            <StyledForms id="FormR" action="/login">
              <HLetters>Регистрация</HLetters>
              <label> Логин:</label>
              <FormInpt type="text" placeholder="Введите логин" name="login" value={this.state.FormVarR.login} onChange={this.handleChangeLogin}/>
              <label> E-mail:</label>
              <FormInpt type="email" placeholder="Введите e-mail" name="email" value={this.state.FormVarR.email} onChange={this.handleChangeEmail}/>
              <label> Пароль:</label>
              <FormInpt  type="password" placeholder="Введите пароль" name="password" value={this.state.FormVarR.password} onChange={this.handleChangePass}/>
              <label> Повторите пароль:</label>
              <FormInpt type="password" placeholder="Повторите пароль" name="passwordCheck" value={this.state.FormVarR.passwordCheck} onChange={this.handleChangePassCh}/>
              
              <FormSbmt value="Зарегистрироваться" onClick={this.GetPost} readOnly/>
            </StyledForms>
          </Router>
      );
    }
}