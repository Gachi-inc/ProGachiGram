import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {StyledForms, FormInpt, FormSbmt, HLetters} from './Forms.styles';
import { userActions } from 'redux/actions';
import store from 'redux/store';
import validate from 'utils/validate'

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
        };
        this.GetPost = this.GetPost.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangePassCh = this.handleChangePassCh.bind(this);
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
      async GetPost(){
        store
        .dispatch(userActions.fetchUserRegister(this.state.FormVar))
        .then(res => {
          if(res.data.status === "error"){
            alert(res.data.message);
          } else{
            this.props.history.push('/signup/verify');     
          }  
        })
      }
    render() {
      return (
        
          <Router>

            <StyledForms id="FormR">
              <HLetters>Регистрация</HLetters>
              <label> Логин:</label>
              <FormInpt type="text" placeholder="Введите логин" name="login" value={this.state.FormVar.login} onChange={this.handleChangeLogin}/>
              <label> E-mail:</label>
              <FormInpt type="email" placeholder="Введите e-mail" name="email" value={this.state.FormVar.email} onChange={this.handleChangeEmail}/>
              <label> Пароль:</label>
              <FormInpt  type="password" placeholder="Введите пароль" name="password" value={this.state.FormVar.password} onChange={this.handleChangePass}/>
              <label> Повторите пароль:</label>
              <FormInpt type="password" placeholder="Повторите пароль" name="passwordCheck" value={this.state.FormVar.passwordCheck} onChange={this.handleChangePassCh}/>
              
              <FormSbmt value="Зарегистрироваться" onClick={this.GetPost} readOnly/>
            </StyledForms>
          </Router>
      );
    }
}