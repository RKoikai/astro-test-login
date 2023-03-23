import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import "../../public/style/styles.css";
const API_URLS = "http://[::1]:3000/";
function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});

    const errors = {
        uname: "Invalid Username/Password",
        pass: "Invalid Password"
    };

    const onSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
       
        var postData = {
            email: enteredData.email,
            password:  enteredData.password
          };
          
          let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        axios.post(API_URLS + `users/login`,postData,axiosConfig)
            .then((res) => {
                localStorage.setItem('userData', JSON.stringify(res.data));
                setTimeout(() => {
                	window.location.href = 'admin';
                }, 1500);
            })
            .catch((err) => {
                if( err.response.status != 200)
                {
                    setErrorMessages({ name: "uname", message: errors.uname });

                }

                
            });
    };
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const [enteredData, setEnteredData] = useState({
        email: null,
        password: null
    });
    const onChangeHandler = e => {
        setEnteredData({
            ...enteredData,
            [e.target.name]: e.target.value
        });

    };
    // JSX code for login form
    const renderForm = (
        <div className="app">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="email" onChange={onChangeHandler} name="email" required />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" onChange={onChangeHandler} name="password" required />
                        {renderErrorMessage("uname")}
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {renderForm}
            </div>
        </div>
    );
}

export default Login;