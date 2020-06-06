import React, { Redirect, Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {StyledForms, FormInpt, FormSbmt, HLetters} from './Forms.styles';

export class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          login: "",
          password: ""
        };
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.GetPostAndRedirect = this.GetPostAndRedirect.bind(this);
    }

  handleChangeLogin(event) {
    this.setState({login: event.target.value});
  }
  handleChangePass(event) {
    this.setState({password: event.target.value});
  }
  async GetPostAndRedirect(){
    console.log(this.state);
    return axios.post('api/login', this.state);
    /*await fetch('api/login', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    }).then(res => {
      console.log('Работаем');
      res.json().then(data => {
        console.log(data);
        CheckLogIn = data;
        alert('Вы успешно вошли в систему')}  
      )}      
    )*/
  }
    render()
    {
      return (
        <Router> 
          <StyledForms /*method="POST" action="api/login"*/>
            <HLetters>Вход</HLetters>
            <label> Логин/E-mail:</label>
            <FormInpt type="text" placeholder="Введите логин" name="login" value={this.state.login} onChange={this.handleChangeLogin}/>
            <label> Пароль:</label>
            <FormInpt type="password" placeholder="Введите пароль" name="password" value={this.state.password} onChange={this.handleChangePass}/>
            
            <FormSbmt value="Войти" onClick={this.GetPostAndRedirect} readOnly/>

          </StyledForms>


        </Router>
      );
    }
}

export var CheckLogIn = {success: true};