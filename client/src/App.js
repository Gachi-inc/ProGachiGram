import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {Footer} from './Components/Footer/Footer';

import {GlobalStyles} from './Components/GlobalStyles/GlobalStyles.js';
//import {GlobalStyles, Header, Main} from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyles/>
        <Header/>
        <Main/>
        <Footer/>      
      </BrowserRouter> 
    );
  }
}

export default App;