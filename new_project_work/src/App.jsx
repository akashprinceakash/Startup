import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebaseConfig';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Quicksearch from './components/Quicksearch';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Header from './components/Header';
// import AdminPage from './components/AdminPage';
//AdminComponent
import CreateUsers from './components/AdminComponent/CreateUsers';
import Users from './components/AdminComponent/Users';
import UpdateUsers from './components/AdminComponent/UpdateUsers';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/qs' element={<Quicksearch />} />
          {/* <Route path='/admin' element={<AdminPage />} /> */}
          <Route path='/users' element={<Users />}></Route>
          <Route path='/create' element={<CreateUsers />}></Route>
          <Route path='/update/:id' element={<UpdateUsers />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
