import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebaseConfig';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Quicksearch from './components/Quicksearch';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/qs' element={<Quicksearch />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
