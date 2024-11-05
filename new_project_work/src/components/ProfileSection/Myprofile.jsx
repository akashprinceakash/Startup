import React, { useEffect, useState } from "react";
import { auth, db } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import "./Myprofile.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ManageAdress from "./ManageAdress";
export default function Myprofile() {
  const [selectedMenu, setSelectedMenu] = useState("Profile Information");
   const [ordereddata , setOrdereddata] = useState([]);
   const [currentusername , setcuurentuser]= useState();
 
  const navigate = useNavigate();
  const handlelogout = () => {
    navigate('/')
  }
 // Frontend code
const insertOrders = async () => {
  let orderData = [
    { orderedId: 101, productId: 'ab2001', description: "Wireless Bluetooth Earbuds", price: 499 },
    { orderedId: 102, productId: 'ac2002', description: "Smartphone Case", price: 1509 },
    { orderedId: 103, productId: 'ad2003', description: "Portable Charger 10000mAh", price: 259 },
    { orderedId: 104, productId: 'ae2004', description: "Waterproof Fitness Tracker", price: 399 },
    { orderedId: 105, productId: 'af2005', description: "USB-C to Lightning Cable", price: 1299 },
    { orderedId: 106, productId: 'ag2006', description: "Wireless Keyboard and Mouse Combo", price: 2999 },
    { orderedId: 107, productId: 'ah2007', description: "HDMI to VGA Adapter", price: 899 },
    { orderedId: 108, productId: 'ai2008', description: "Adjustable Laptop Stand", price: 1999 },
    { orderedId: 109, productId: 'aj2009', description: "Noise-Canceling Headphones", price: 599 },
    { orderedId: 110, productId: 'ak2010', description: "LED Desk Lamp with USB Charging Port", price: 229 }
  ];

  try {
      const response = await axios.post('http://localhost:9001/createmyorders',orderData, {headers: {
        'Content-Type': 'application/json'
    }});
      // const response = await fetch('http://localhost:9001/createmyorders', { // Replace with your actual backend URL
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(orderData),
      // });

      if (response.ok) {
          const result = await response.json();
          console.log('Insertion successful:', result);
      } else {
          console.error('Insertion failed');
      }
  } catch (error) {
      console.error('Error:', error);
  }
};

// Call the function to send data

const [userData, setUserData] = useState({
  firstName: '',
  lastName: '',
  gender: '',
  email: '',
  mobileNumber: '',
});
const [isDataLoaded, setIsDataLoaded] = useState(false);

const fetchUserProfile = async () => {
  const user = auth.currentUser;
  const userName = auth.currentUser.displayName; 
  setcuurentuser(userName);
  if (user) {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const data = userSnap.data();
      // Set data, adding empty strings for any missing fields to prompt the user
      setUserData({
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        gender: data.gender || '',
        email: data.email || user.email, // Use auth email if not in Firestore
        mobileNumber: data.mobileNumber || '',
      });
      setIsDataLoaded(true);
    }
  }
};

const updateUserProfile = async () => {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, userData);
    alert('Profile updated successfully');
  }
};

useEffect(() => {
  fetchUserProfile();
}, []);

useEffect(() => {
  axios.get('http://localhost:9001/getAllorders')
  .then((response)=>{
    setOrdereddata(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
}, [])

  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = ordereddata.filter(order =>
      order.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <h4>{currentusername}</h4>
            <nav>
              <ul>
                <li onClick={()=> setSelectedMenu("MyOrders")}>My Orders {'>'}</li>
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
                  <div className="info-item">
      <h2>Profile Information</h2>
      {isDataLoaded ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateUserProfile();
          }}
        >
          <input
            type="text"
            value={userData.firstName}
            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
            placeholder="First Name"
          />
          <input
            type="text"
            value={userData.lastName}
            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
            placeholder="Last Name"
          />
          <select
            value={userData.gender}
            onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="email"
            value={userData.email}
            disabled
          />
          <input
            type="tel"
            value={userData.mobileNumber}
            onChange={(e) => setUserData({ ...userData, mobileNumber: e.target.value })}
            placeholder="Mobile Number"
          />
         <div className="update-profile"> <button type="submit" >Update Profile</button></div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
                {/* <h5>Personal Information <span >Edit</span></h5>
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
                </div> */}
              </section>
            )}

            {selectedMenu === "Manage Addresses" && (
            <ManageAdress/>
            )}
            {selectedMenu === "PAN Card Information" && (
              <section className="pan-info">
                <h3>PAN Card Information</h3>
                <p>PAN card details content goes here...</p>
              </section>
            )}
            {selectedMenu === "MyOrders" && (
              
            <section className="pan-info">             
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search your orders here"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button className="search-button">Search Orders</button>
            </div>

                
                <span onClick={insertOrders}>Edit</span>
                {/* {filteredOrders.map((item,index)=> ( 
                  
              <div key={index} className="orders-info">
             <div >{item.orderedId} </div>
               <div>{item.productId} </div>
               <div>{item.description} </div>
               <div>{item.price} </div>
               </div>
              ))} */}
                         {filteredOrders.length > 0 ? (
                filteredOrders.map((item,index) => (
                  <div key={index} className="orders-info row">
                  <div className="col-3">{item.orderedId} </div>
                    <div className="col-3">{item.productId} </div>
                    <div className="col-3">{item.description} </div>
                    <div className="col-3">{item.price} </div>
                    </div>
                ))
            ) : (
                <p className="no-results">No More Results To Display</p>
            )}
              </section> 
            )}
          
            <section className="faqs">
              <h3>FAQs</h3>
              <p>What happens when I update my email address (or mobile number)?</p>
              <p>Your login email id (or mobile number) changes, likewise...</p>
              <p>When will my account be updated with the new email address (or mobile number)?</p>
              <p>It happens as soon as you confirm the verification code...</p>
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png" alt="" />
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
