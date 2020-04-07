import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {GlobalStyles} from './Components/GlobalStyles/GlobalStyles.js';
//import {GlobalStyles, Header, Main} from './components';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <BrowserRouter>
        <GlobalStyles/>
        <Header/>
          <Main/>
          <div className="admins">
            {this.state.users.map(user =>
              <div key={user.id}>{user.username}</div>
            )}
          </div>       
      </BrowserRouter>
      
    );
  }
}

export default App;