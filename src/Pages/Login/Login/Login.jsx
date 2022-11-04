import React from 'react';
import logo from './logo.svg';
import './Login.css';
import SignIn from '../../../Components/SignIn'
const Login = () => {
    return (
        <div>

            <div className="App">
                <header className="App-header">
                    <SignIn checkLogin={(email, pass) => {
                        return email === "email" && pass === "password"
                    }} />

                </header>
            </div>


        </div>
    );
};

export default Login;