import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../App.css';

export class Registrate extends Component{
    render()
    {
        return (
            <Router>
                <div class="Registration">
                    <h1 class="page">Hi</h1>
                    <button>Зарегистрироваться</button>
                </div>
           
            </Router>
                        
        );
    }
}