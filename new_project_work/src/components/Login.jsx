// src/Login.js
import React, { useState } from 'react';
import { auth, googleProvider, db } from '../components/firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
// import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState();
  const [error2, seterror2] = useState();
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await saveUserRole(user.uid, user.email);
      checkUserRole(user.uid);
    } catch (error) {
      setError2(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await saveUserRole(user.uid, user.email);
      checkUserRole(user.uid);
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to save user role in Firestore with a default role of "user"
  const saveUserRole = async (uid, email) => {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      await setDoc(userRef, { email, role: 'user' }); // Set default role to 'user'
    }
  };

  // Function to check user role and navigate based on role
  const checkUserRole = async (uid) => {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const role = userSnap.data().role;
      if (role === 'Admin') {
        navigate('/users');
      } else {
        navigate('/dashboard');
      }
    } else {
      console.log("No role found for this user");
    }
  };
  return (
    <div className="auth-container">
      <span style={{ color: '#e40b0b' }}>{error2}</span>
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
