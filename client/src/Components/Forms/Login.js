import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {StyledForms, FormInpt, FormSbmt, HLetters} from './Forms.styles';
import Messenger from './../Messenger/Messenger';
import axios from '../../core/axios';
export class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          FormVar: {
            login: "",
            password: ""
          },
          DataRequest: {}
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
    alert('Проверка введённых данных...Подождите...');
    await axios.post('api/login', this.state.FormVar)
    .then(res => {
      this.setState({DataRequest: res.data});
      if(!res.data.success)
        alert(res.data.errorMessage);
      else document.getElementById('Form').submit(); 
    }).catch(err => console.log('error:', err));
  }
    render()
    {
      return (
        <Router> 
          <StyledForms id="Form" action= /*"/LogInCheck"*/"/im">
            <HLetters>Вход</HLetters>
            <label> Логин/E-mail:</label>
            <FormInpt type="text" placeholder="Введите логин" name="login" value={this.state.FormVar.login} onChange={this.handleChangeLogin}/>
            <label> Пароль:</label>
            <FormInpt type="password" placeholder="Введите пароль" name="password" value={this.state.FormVar.password} onChange={this.handleChangePass}/> 
            <FormSbmt value="Войти" onClick={this.GetPostAndRedirect} readOnly/>
          </StyledForms>

        {/*<Switch>
          <Route exact path="/LogInCheck" render={() => this.state.DataRequest.success ? <Messenger {...this.state.DataRequest} /> : <Login/>}/>
        </Switch>*/}
        </Router>
      );
    }
}