import React, { Redirect, Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {StyledForms, FormInpt, FormSbmt, HLetters} from './Forms.styles';
import axios from '../../core/axios';
export class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          FormVar: {
            login: "",
            password: ""
          },
          DataRequest: {
            success: false,
          }
        };
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.GetPostAndRedirect = this.GetPostAndRedirect.bind(this);
    }

  handleChangeLogin(event) {
    this.setState({FormVar: 
      {
        login: event.target.value,
        password: this.state.FormVar.password
      }});
  }
  handleChangePass(event) {
    this.setState({FormVar: 
      {
        login: this.state.FormVar.login,
        password: event.target.value
      }});
  }
  async GetPostAndRedirect(event){
    event.preventDefault();
    alert('Проверка введённых данных...');
    await axios.post('api/login', this.state.FormVar)
    .then(res => {
      this.setState({DataRequest: res.data});
      document.getElementById('Form').submit(); 
    }).catch(err => console.log('error:', err));
  }
    render()
    {
      return (
        <Router> 
          <StyledForms id="Form" action={this.state.DataRequest.success ? "/im" : "/login"} >
            <HLetters>Вход</HLetters>
            <label> Логин/E-mail:</label>
            <FormInpt type="text" placeholder="Введите логин" name="login" value={this.state.FormVar.login} onChange={this.handleChangeLogin}/>
            <label> Пароль:</label>
            <FormInpt type="password" placeholder="Введите пароль" name="password" value={this.state.FormVar.password} onChange={this.handleChangePass}/>
            
            <FormSbmt value="Войти" onClick={this.GetPostAndRedirect} readOnly/>

          </StyledForms>


        </Router>
      );
    }
}

export var CheckLogIn = {success: false};