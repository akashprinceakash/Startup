// src/Login.js
import React, { useState } from 'react';
import { auth, googleProvider } from '../components/firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors , setError] = useState();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      navigate('/dashboard');
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard')
      // alert("Google Login Successful");
    } catch (error) {
      // alert("Error: " + error.message);
      setError(error.message)
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" >Login</button>
      </form>
      {errors}
      <button className="google-button" onClick={handleGoogleLogin}>Login with Google</button>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
};

export default Login;
