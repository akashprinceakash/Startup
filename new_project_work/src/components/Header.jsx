import React, { useState } from "react";
import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showButtons , setShowButtons] = useState(false);
  const handlesignout = () => {
    navigate('/')
  }
  const handleClick =()=>{
    setShowButtons(!showButtons)
  }
  const handleProfile=()=>{
    navigate('/profile')
  }
  const getHeaderContent = () => {
    if (location.pathname === "/dashboard" || location.pathname === "/qs" || location.pathname === "/users") {
      return <>
        <div className="logo-container">
          <img
            src="/public/gfxhead-coloured-22x.png"
            alt=""
            className="logo"
          />
        </div>
        <div className="searchdiv">
        {/* <span className="span">         */}
       <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg">
       <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
          {/* </span>  */}
          <input type="text" name="" id="" className="searchbox" />
          </div>
        
        <div className="auth">
          <button className="toggle-btn" onClick={handleClick}>
            {showButtons ? 'Akash' : 'Akash' }
          </button>
            {showButtons &&
         <> <button onClick={()=> { handleProfile()}}>My Profile</button>
          <button className="signup" onClick={() => handlesignout()}>
            Logout
          </button></>}
        </div>
      </>

    }
    else {
      return <>
        <div className="logo-container">
          <img
            src="/public/gfxhead-coloured-22x.png"
            alt=""
            className="logo"
          />
        </div>
        <div className="auth">

        </div>
      </>
    }
  };
  return (
    <>
      <header className="header">
        {getHeaderContent()}
      </header>
    </>
  );
}
