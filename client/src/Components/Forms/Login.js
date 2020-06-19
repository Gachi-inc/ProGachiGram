import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {StyledForms, FormInpt, FormSbmt, HLetters} from './Forms.styles';
//import Messenger from './../Messenger/Messenger';
import axios from '../../core/axios';
import validateForm from "utils/validate";
import validateField from "utils/helpers/validateField";
export class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          FormVar: {
            login: "",
            password: ""
          },
          DataRequest: {},
        };
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        /*this.GetPostAndRedirect = this.GetPostAndRedirect.bind(this)*/;
        this.validate = this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

  validate = (values) => {
    let errors = {};

    validateForm({isAuth: true, values, errors});

    return errors;
  }

  /*handleSubmit = (values, {setSubmitting}) => {
    return axios.post('/api/user/signin', values)
    .then(({data}) => {
      setSubmitting(false);
    })
    .catch(() => {
      setSubmitting(false);
    })
  }*/
  async GetPostAndRedirect(event){
    event.preventDefault();
    alert('Проверка введённых данных...Подождите...');
    await axios.post('/api/user/signin', this.state.FormVar)
    .then(res => {
      this.setState({DataRequest: res.data});
      window.localStorage = this.DataRequest
      if(!res.data.success)
        alert(res.data.errorMessage);
      else {
        axios.post('/api/sendmailer').
        then(res => {
          if(res.status === 'success')
          {
            alert(res.message);
          }
          else
            {
              alert(res.message);
            }
        })
        document.getElementById('Form').submit();
      } 
    }).catch(err => console.log('error:', err));
  }
    render()
    {
      return (
        <Router> 
          <StyledForms id="Form" action= /*"/LogInCheck"*/"/im">
            <HLetters>Вход</HLetters>
            <label> Логин/E-mail:</label>
            <FormInpt type="text" placeholder="Введите логин" name="login" value={this.state.FormVar.login} onChange={this.handleChangeLogin} /*validateStatus={validateField("email", touched, errord)}*//>
            <label> Пароль:</label>
            <FormInpt type="password" placeholder="Введите пароль" name="password" value={this.state.FormVar.password} onChange={this.handleChangePass}/> 
            <FormSbmt value="Войти" onClick={this.handleSubmit} readOnly/>
          </StyledForms>
        </Router>
      );
    }
}