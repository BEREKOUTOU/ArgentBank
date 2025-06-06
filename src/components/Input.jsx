import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginSuccess } from '../redux/actions/auth.actions.jsx';
import { isValidEmail, isValidPassword } from '../utils/regex.jsx';
import '../styles/Components/Input.css';

function Input () {
    /* Allows you to retrieve the data entered by the user in the form */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    /* Indicates an error message if data is invalid */
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    /* Asynchronous form function */
    const handleSubmit = async (event) => {
        event.preventDefault();
        /* Handle error message */
        if (!isValidEmail(email)) {
            setErrorMessage("Invalid email address");
            return;
        }
        if (!isValidPassword(password)) {
            setErrorMessage("Invalid password");
            return;
        }
        try {
            /* Send the data to the server */
            const response = await fetch("http://localhost:3001/api/v1/user/login", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });
            /* If the response is successful, the token is saved in the session storage */
            if (response.ok) {
                const data = await response.json();
                const token = data.body.token;
                dispatch(loginSuccess(token));
                sessionStorage.setItem("token", token);
                if (rememberMe) {
                    localStorage.setItem("token", token);
                }
                alert("You have logged in successfully!");
                navigate('/profile');
            } else {
                const error = "Incorrect email/password"
                dispatch(loginFailed(error));
            }
        } catch (error) {
                console.error("Login error:", error); // Log login error
                const errorMessage = "An error occurred. Please try again later.";
                dispatch(loginFailed(errorMessage));

        }
    }

    return (
        <section className='sign-in-content'>
            <i className="fa-solid fa-circle-user"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username' 
                        type='text'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete="email"
                        placeholder='Enter your email address'
                        required
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='password'>Password</label>
                    <input 
                        id='password' 
                        type='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="current-password"
                        placeholder='Enter your password'
                    />
                </div>
                <div className='input-remember'>
                    <input 
                        id='remember-me' 
                        type='checkbox' 
                        checked={rememberMe}
                        onChange={(event) => setRememberMe(event.target.checked)}
                    />
                    <label htmlFor='remember-me'>Remember me</label>
                </div>
                <button className="sign-in-button">
                    Sign In
                </button>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </form>
        </section>
    )
}
export default Input;
