import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap";
export default function ManageAdress() {
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];
  const [showButtons, setShowButtons] = useState(false);
  const [area, setArea] = useState();
  const [city, setCity] = useState();
  const [selectStates, setselectStates] = useState();
  const [pincode, setPincode] = useState();
  const [addresresult, setaddressresult] = useState([]);
  const handleClick = () => {
    setShowButtons(!showButtons)
  }
  useEffect(() => {
    axios.get('http://localhost:9001/getaddress')
      .then((res) => {
        console.log(res.data)
        setaddressresult(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const handleSubmit = async () => {
    try {
      const result = await axios.post('http://localhost:9001/createaddress', { area, city, selectStates, pincode })
      console.log(result.data);
      //    setaddressreslt(result.data)
    }
    catch (err) {
      console.log(err);
    }
  }
  const handledelete = async (id) => {
    try {
      const result1 = await axios.delete('http://localhost:9001/deleteaddress/' + id)
      console.log("suceessfully deleted" + result1.data)
      window.location.reload()
    }
    catch (error) {
      console.error(error)
    }
  }

  return (

    <section className="addresses">
      <section className="personal-info">
        <h5>Manage Addresses</h5>
        <div className="info-item">
          <div style={{ width: '100%', textAlign: 'start' }}>
            <Button style={{ color: "blue", backgroundColor: "white" }} onClick={handleClick}>
              {showButtons ? '+ ADD A NEW ADDRESS' : '+ ADD A NEW ADDRESS'}
            </Button>
          </div>

          {addresresult.map((item, index) => (
            <div className='useraddress' key={index}>
              <h6>Home</h6>
              <span>
                <p>{item.area} {item.city} {item.selectStates} {item.pincode}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-trash-2"
                  onClick={() => handledelete(item._id)}
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"></path>
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                  <line x1="9" y1="3" x2="15" y2="3"></line>
                  <line x1="12" y1="3" x2="12" y2="6"></line>
                </svg>

              </span>
            </div>
          ))}

        </div>
        {showButtons && (<div className="info-item">
          <div className="info-addresss">
            <h6> Address (Area and Street)</h6>
            <textarea name="" id="" onChange={(e) => setArea(e.target.value)}></textarea>
          </div>
          <div className="info-addresss">
            <h6>City/District/Town</h6>
            <input type="text" placeholder="City/District/Town" onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="info-addresss">
            <h6>State</h6>
            <select name="state" id="state-select" onChange={(e) => setselectStates(e.target.value)}>
              <option value="">--Select State--</option>
              {states.map((states, index) => (
                <option key={index} value={states}>{states}</option>
              ))}
            </select>
          </div>
          <div className="info-addresss">
            <h6>Address Type</h6>
            <span> <input type="radio" name="" id="" /> Home</span>
            <span> <input type="radio" name="" id="" /> work </span>
          </div>
          <div className="info-addresss">
            <h6>Pincode</h6>
            <input type="Number" placeholder="Pincode" onChange={(e) => setPincode(e.target.value)} />
          </div>
          <div className="info-addresss">
            <button type='submit' className='btn btn-primary' onClick={() => { handleSubmit(); setShowButtons(false) }} >Save</button>
          </div>
        </div>
        )}
      </section>
    </section>

  )
}
