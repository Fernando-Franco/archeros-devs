import React, { useEffect, useState } from 'react';


import api from '../../services/api'


import './style.css'
// import { Container } from './styles';

const Login = () => {

    const [] = useState();

    const handleSubmit = () => {
        var email = document.getElementById("login-email");
        var password = document.getElementById("login-password");

        if ((email != '') && (password != '')) {
            alert("irra");
        }
    }

    const handleReset = () => {
        var email = document.getElementById("login-email");
        var password = document.getElementById("login-password");

        email.value = "";
        password.value = "";

    }

    const keyDown = (e) => {
        if (e.keyCode === 13) {
            var button = document.getElementById('login-button-send');
            button.click();
        }   

    }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h2>Login</h2>
                <div className="login-form" >
                    <input id="login-email" className="login-email" onKeyDown={keyDown}/>
                    <input id="login-password" className="login-password" onKeyDown={keyDown} type="password"/>
                    <button id="login-button-send" className="login-button-send" type="button" onClick={handleSubmit}>Enviar</button>
                    <button className="login-button-reset" type="button" onClick={handleReset}>Cancelar</button>
                </div>                
            </div>
        </div>
    )
}

export default Login;
