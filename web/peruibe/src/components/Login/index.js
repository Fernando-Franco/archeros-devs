import React, { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

import api from '../../services/api'


import './style.css'
// import { Container } from './styles';

const Login = () => {

    const [] = useState();


    const loginAPI = async function(email, password) {
        const response = await api.post('/', {email, password});
    }

    const handleSubmit = () => {
        var email = document.getElementById("login-email");
        var password = document.getElementById("login-password");

        if ((email != '') && (password != '')) {
            loginAPI(email, password);
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

    const responseGoogle = (response) => {
        console.log(response);
    }

    const responseFacebook = (response) => {
        console.log(response);
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
                    <FacebookLogin
                        appId="415441372420544  "
                        fields="name, email, picture"
                        callback={responseFacebook}
                    />
                    <GoogleLogin
                        clientId="376063619992-9ojvonbnkn4hbtnv286i3kndk1a256so.apps.googleusercontent.com"
                        buttonText="Login com Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </div>                
            </div>
        </div>
    )
}

export default Login;
