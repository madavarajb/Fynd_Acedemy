import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { useHistory } from 'react-router-dom';

import axios from 'axios';
const Login = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    // const handleLogin = async (event) => {
    //     event.preventDefault();

    //     try {
    //         await axios.post('/login', {
    //             username,
    //             password,
    //         });
    //         window.location.href = '/'; // Redirect using window.location
    //     } catch (error) {
    //         setError("Invalid username or password");
    //     }
    // };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = async (event) => {
      event.preventDefault();
  
      try {
        await axios.post('/login', {
          username,
          password,
        });
        window.location.href = '/'; // Redirect using window.location
      } catch (error) {
        setError("Invalid username or password");
      }
    };
    
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
                {error && <p className="error-message">{error}</p>}
                
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p> {/* Link to the registration page */}
        </div>
    );
};

export default Login;
