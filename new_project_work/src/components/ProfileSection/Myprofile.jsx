import React, { useState } from "react";
import "./Myprofile.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ManageAdress from "./ManageAdress";
export default function Myprofile() {
  const [selectedMenu, setSelectedMenu] = useState("Profile Information");


  const navigate = useNavigate();
  const handlelogout = () => {
    navigate('/')
  }

  // const handleAddress = async () => {
  //   try {
  //     const result = await axios.post('http://localhost:9001/createaddress', {})
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <>
      <div className="mainsection">
        <div className="section1">
          <aside className="sidebar">
            <img class="_2hxEz+" height="50px" width="50px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" />
            <h6>Hello,</h6>
            <h4>Akash RG</h4>
            <nav>
              <ul>
                <li>My Orders {'>'}</li>
                <li>Account Settings
                  <ul>
                    <li onClick={() => setSelectedMenu("Profile Information")}>Profile Information</li>
                    <li onClick={() =>setSelectedMenu("Manage Addresses")  }>Manage Addresses</li>
                    <li onClick={() => setSelectedMenu("PAN Card Information")}>PAN Card Information</li>
                  </ul>
                </li>
                <li>Payments
                  <ul>
                    <li>Gift Cards</li>
                    <li>Saved UPI</li>
                    <li>Saved Cards</li>
                  </ul>
                </li>
                <li onClick={() => { handlelogout() }}>
                  <span>
                    <svg width="24" height="24" class="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#2874F0" stroke-width="0.3" stroke="#2874F0" d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path>
                    </svg></span>Logout
                </li>
              </ul>
            </nav>
          </aside>
        </div>
        <div className="section2" >
          <main className="profile-content">
            {selectedMenu === "Profile Information" && (
              <section className="personal-info">
                <h5>Personal Information <span>Edit</span></h5>
                <div className="info-item">
                  <label>First Name</label>
                  <input type="text" value="Akash" readOnly />
                </div>
                <div className="info-item">
                  <label>Last Name</label>
                  <input type="text" value="RG" readOnly />
                </div>
                <div className="info-item">
                  <label>Your Gender</label>
                  <input type="radio" name="gender" value="Male" checked readOnly /> Male
                  <input type="radio" name="gender" value="Female" readOnly /> Female
                </div>
                <div className="info-item">
                  <label>Email Address <span>Edit</span></label>
                  <input type="email" value="" placeholder="Enter your email" readOnly />
                </div>
                <div className="info-item">
                  <label>Mobile Number <span>Edit</span></label>
                  <input type="text" value="+919886921568" readOnly />
                </div>
              </section>)}

            {selectedMenu === "Manage Addresses" && (
            <ManageAdress/>
            )}
            {selectedMenu === "PAN Card Information" && (
              <section className="pan-info">
                <h3>PAN Card Information</h3>
                <p>PAN card details content goes here...</p>
              </section>
            )}

            <section className="faqs">
              <h3>FAQs</h3>
              <p>What happens when I update my email address (or mobile number)?</p>
              <p>Your login email id (or mobile number) changes, likewise...</p>
              <p>When will my account be updated with the new email address (or mobile number)?</p>
              <p>It happens as soon as you confirm the verification code...</p>
              {/* Add more FAQ content as needed */}
            </section>
          </main>
        </div>
      </div>
    </>

    //   <div className="profile-page">
    //   <aside className="sidebar">
    //     <h2>Hello, Akash RG</h2>
    //     <nav>
    //       <ul>
    //         <li>My Orders</li>
    //         <li>Account Settings
    //           <ul>
    //             <li>Profile Information</li>
    //             <li>Manage Addresses</li>
    //             <li>PAN Card Information</li>
    //           </ul>
    //         </li>
    //         <li>Payments
    //           <ul>
    //             <li>Gift Cards</li>
    //             <li>Saved UPI</li>
    //             <li>Saved Cards</li>
    //           </ul>
    //         </li>
    //         <li>My Stuff
    //           <ul>
    //             <li>My Coupons</li>
    //             <li>My Reviews & Ratings</li>
    //             <li>All Notifications</li>
    //             <li>My Wishlist</li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </nav>
    //   </aside>
    //   <main className="profile-content">
    //     <section className="personal-info">
    //       <h3>Personal Information <span>Edit</span></h3>
    //       <div className="info-item">
    //         <label>First Name</label>
    //         <input type="text" value="Akash" readOnly />
    //       </div>
    //       <div className="info-item">
    //         <label>Last Name</label>
    //         <input type="text" value="RG" readOnly />
    //       </div>
    //       <div className="info-item">
    //         <label>Your Gender</label>
    //         <input type="radio" name="gender" value="Male" checked readOnly /> Male
    //         <input type="radio" name="gender" value="Female" readOnly /> Female
    //       </div>
    //       <div className="info-item">
    //         <label>Email Address <span>Edit</span></label>
    //         <input type="email" value="" placeholder="Enter your email" readOnly />
    //       </div>
    //       <div className="info-item">
    //         <label>Mobile Number <span>Edit</span></label>
    //         <input type="text" value="+919886921568" readOnly />
    //       </div>
    //     </section>
    //     <section className="faqs">
    //       <h3>FAQs</h3>
    //       <p>What happens when I update my email address (or mobile number)?</p>
    //       <p>Your login email id (or mobile number) changes, likewise...</p>
    //       <p>When will my account be updated with the new email address (or mobile number)?</p>
    //       <p>It happens as soon as you confirm the verification code...</p>
    //       {/* Add more FAQ content as needed */}
    //     </section>
    //   </main>
    // </div>
  );
}
