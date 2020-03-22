import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Team-2 PROGACHI.
          <a href = 'https://github.com/frontend-rtf-2020/team-2'> GitHub </a>
          <ul>
            <li>Гаев Михаил Алексеевич</li>
            <li>Овчинников Владимир Олегович</li>
            <li>Савин Григорий Олегович</li>
            <li>Паренюк Никита Николаевич</li>
          </ul>
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
