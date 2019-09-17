import React, { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

import api from '../../services/api'
import axios from 'axios'


import './style.css'
// import { Container } from './styles';

const Login = () => {

    const [user, setUser] = useState({});


    
        
    const handleSubmit = async () => {
        var email = document.getElementById("login-email").value;
        var password = document.getElementById("login-password").value;

        if ((email !== '') && (password !== '')) {
            try {
                const response = await api.get('/signin', {email, password});
                console.log(response.data);
                setUser(response.data);
                console.log(user);
                if (user.retorno === true ) {
                    alert("Logado");
                    axios.defaults.headers.common = {'Authorization': `bearer ${user.token}`}
                } else {
                    alert("Usuário ou senha incorretos");
                }
            } catch (e) {
                console.log(e)
            }
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
