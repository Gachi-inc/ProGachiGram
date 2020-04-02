import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import {Registrate} from './Components/Registrate'
import {Login} from './Components/Login'

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <Router>
        <div class="App">
          <div class="title">
            <div><h1>ProGachiGram</h1></div>
            <div class="RegistrateButton">
              <Link to="/registrate">
                <button>Регистрация</button>
              </Link>
              <Link to="/login">
                <button>Войти</button>
              </Link>
            </div>       
          </div>
        
        
        
        
        <div className="admins">
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
        </div>

        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/registrate" component={Registrate}/>
        </Switch>          
        </div>
      </Router>
      
    );
  }
}

export default App;