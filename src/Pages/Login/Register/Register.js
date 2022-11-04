import React from 'react';
// import logo from './logo.svg';
// import './Login.css';
import SignUp from '../../../Components/SignUp'

const Register = () => {
    return (
        <div>

        <div className="App">
            <header className="App-header">
                <SignUp checkLogin={(email, pass) => {
                    return email === "email" && pass === "password"
                }} />

            </header>
        </div>


    </div>
    );
};

export default Register;