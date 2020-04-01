import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../App.css';

export class Login extends Component{
    render()
    {
        return (
            <Router>
                <div class="Logining">
                    <h1 class="page">Hi, again</h1>
                    <button>Войти</button>
                </div>      
            </Router>
                        
        );
    }
}