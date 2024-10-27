import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebaseConfig';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login';
import Dashboard from './components/dashboard';
import Quicksearch from './components/Quicksearch';
import Signup from './components/Signup';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/qs' element={<Quicksearch />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
