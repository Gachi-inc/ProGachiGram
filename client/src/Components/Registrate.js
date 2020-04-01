import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../App.css';
//import function send() from  '../../../server/routes/SendMailer.js';
const SendMailer = require('../../../server/routes/SendMailer.js');
export class Registrate extends Component{
    render()
    {
        return (
            <Router>
                <div class="Registration">
                    <h1 class="page" onClick = {SendMailer("savin-grigosha@yandex.ru")}/*script src={SendMailer.send()}*/>Hi</h1>
                    <button>Зарегистрироваться</button>
                </div>
           
            </Router>
                        
        );
    }
}