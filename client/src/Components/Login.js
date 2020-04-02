import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../App.css';

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
        alert('Вы вошли как: ' + this.state.value);
        event.preventDefault();
      }
    render()
    {
        return (
            <Router>
            <form class="LogInForm" onSubmit={this.handleSubmit}>
              <label>Вход</label>
              <div class="InputInformation">
                <label>
                  Логин:
                  <br/><input type="text" placeholder="Введите логин" name="login" value={this.state.value} onChange={this.handleChange} />
                </label><br/>
                <label>
                  Пароль:
                  <br/><input type="text" placeholder="Введите пароль" name="password" />
                </label><br/>
                <label>
                  E-mail:
                  <br/><input type="text" placeholder="Введите E-mail" name="Email" />
                </label><br/>
              </div>
              <div>
                <input type="submit" value="Войти"/>
              </div>
           </form>
          </Router>
                        
        );
    }
}