import React, { useState } from 'react';
import '../css/Dashboard.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value) => {
    if (!value) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  async function submit(e) {
    e.preventDefault();
    // Assuming email and password are defined somewhere in your code
    validateEmail(email);
    validatePassword(password);
  
    if (emailError || passwordError) {
      // If there are validation errors, do not proceed with login
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3001/users', { email, password });
      console.log("ggg",response.data);
      if (response && response.data.message === "User found") {
        console.log("User logged in successfully");
        // Assuming your server sends back a token
        // Modify this part according to your actual server response
        const token = response.data.token;
        localStorage.clear();
        localStorage.setItem("token", token);
        navigate('/admin/dashboard');
      } else {
        console.log('User not logged in');
      }
    } catch (error) {
      console.error(error);
      // console.log("not login user");
    }
  };
  

  return (
    <>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>LOGIN</h3>
              {/* <p>Admin login</p> */}
            </div>
          </div>
          <form className="login-form" action='POST'>
            <input type="email" value={email} placeholder="username" onChange={(e) => { setEmail(e.target.value); validateEmail(e.target.value); }} />
            {emailError && <span className="error">{emailError}</span>}
            <div className="login-password">
            <input type={showPassword ? 'text' : 'password'} value={password} placeholder="password" onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value); }} />
            {passwordError && <span className="error">{passwordError}</span>}
            
            <div className="fav-icon">
            <i className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'} onClick={togglePasswordVisibility} ></i>
            </div>
            </div>
            <button onClick={submit}>login</button>
            <h1 className="message"><Link to="#">Forgot Your Password</Link></h1>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
