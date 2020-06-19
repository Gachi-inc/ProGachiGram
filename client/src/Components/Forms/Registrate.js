import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {StyledForms, FormInpt, FormSbmt, HLetters} from './Forms.styles';
import axios from '../../core/axios';
import validateForm from "utils/validate";

function  GetVallidateMessage(props) {
  if(props.Valid)
  {
    return <label></label>
  }
  else return <br/>;
}

export class Registrate extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
          FormVar: {
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

      validate = (name, value) => {
        let errors = {};
    
        validateForm({name, value, errors});
    
        return errors;
      }

      handleChangeLogin(event) {
        this.setState({FormVar: 
          {
            fullname: event.target.value,
            email: this.state.FormVar.email,
            password: this.state.FormVar.password,
            //passwordCheck: this.state.FormVar.passwordCheck
          }});
      }
      handleChangeEmail(event) {
        this.setState({FormVar: 
          {
            fullname: this.state.FormVar.fullname,
            email: event.target.value,
            password: this.state.FormVar.password,
            //passwordCheck: this.state.FormVar.passwordCheck
          }});
      }
      handleChangePass(event) {
        this.setState({FormVar: 
          {
            fullname: this.state.FormVar.fullname,
            email: this.state.FormVar.email,
            password: event.target.value,
            //passwordCheck: this.state.FormVar.passwordCheck
          }});
      }
      handleChangePassCh(event) {
        this.setState({FormVar: 
          {
            fullname: this.state.FormVar.fullname,
            email: this.state.FormVar.email,
            password: this.state.FormVar.password,
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
        alert('Проверка введённых данных...Подождите...');
        await axios.post('api/user/signup', this.state.FormVar)
        .then(res => {
          this.setState({DataRequestR: res.data});
          if(res.data.error)
            alert(res.data.errorMessage);
          else {
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
              <FormInpt type="text" placeholder="Введите логин" name="login" value={this.state.FormVar.login} onChange={this.handleChangeLogin}/>
              <GetVallidateMessage Valid={this.validate("login", this.state.FormVar.fullname)}/>
              <label> E-mail:</label>
              <FormInpt type="email" placeholder="Введите e-mail" name="email" value={this.state.FormVar.email} onChange={this.handleChangeEmail}/>
              <GetVallidateMessage Valid={this.validate("email", this.state.FormVar.email)}/>
              <label> Пароль:</label>
              <FormInpt  type="password" placeholder="Введите пароль" name="password" value={this.state.FormVar.password} onChange={this.handleChangePass}/>
              <GetVallidateMessage Valid={this.validate("password", this.state.FormVar.password)}/>
              <label> Повторите пароль:</label>
              <FormInpt type="password" placeholder="Повторите пароль" name="passwordCheck" value={this.state.FormVar.passwordCheck} onChange={this.handleChangePassCh}/>
              <GetVallidateMessage Valid={this.validate("passwordCheck", this.state.FormVar.passwordCheck)}/>
              
              <FormSbmt value="Зарегистрироваться" onClick={this.GetPost} readOnly/>
            </StyledForms>
          </Router>
      );
    }
}