import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateUsers = () => {
    const [name, setName] = useState();
    const [content, setContent] = useState();
    const [imageurl, setImageurl] = useState();
    const [imageID, setimageID] = useState();
    const [imagesid, setimagesid] = useState();
    const [item1, setItem1] = useState();
    const [item2, setItem2] = useState();
    const [item3, setItem3] = useState();
    const [item4, setItem4] = useState();
    const [item5, setItem5] = useState();
    const [item6, setItem6] = useState();
    const [item7, setItem7] = useState();
    const [item8, setItem8] = useState();
    const [item9, setItem9] = useState();
    const [item10, setItem10] = useState();
    const [item11, setItem11] = useState();
    const [item12, setItem12] = useState();
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
         // Log imageID to verify its value
    console.log("Submitting User with imageID:", imageID);

    // Check if imageID is not null or undefined
    if (!imageID) {
        console.error("Image ID is required and cannot be null");
        return; // Optionally display an error to the user
    }
  
        axios.post("http://localhost:9001/createUser", { name, content, imageurl, imageID })
            .then(result => {
                console.log(JSON.stringify(result.data))
                setimagesid(result.data.imageID)
                return  axios.post("http://localhost:9001/createdetails", {imagesid: result.data.imageID, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12 })
            })
              .then(result => {
                console.log("Details"+JSON.stringify(result.data))
                navigate('/users')
            })
            .catch(error => console.log("Error:"+error))
    }
  
     const handlexit=()=>{
        navigate('/users')
     }
    return (
        <div className='d-flex  bg-primary justify-content-center align-items-center'>
        <button className='bg-danger' onClick={()=>handlexit()} >Exit</button>
            <div className='w-50 bg-white rounded p-3 '>
                <form onSubmit={Submit}>
                    <h2>Add Users</h2>
                    <div className="mb-2">
                        <label htmlFor=""> Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">content</label>
                        <input type="text" placeholder='Enter the content' className='form-control'
                            onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter the image url</label>
                        <input type="text" placeholder='Enter the image url' className='form-control'
                            onChange={(e) =>{
                                 setImageurl(e.target.value); 
                            }} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter the image ID</label>
                        <input type="Number" placeholder='Enter the imageID' className='form-control'
                            onChange={(e) =>{ setimageID(e.target.value)}} />
                    </div>
                    <label htmlFor="">grid1</label>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item1 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem1(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item2 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem2(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item3 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem3(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item4 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem4(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item5 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem5(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item6 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem6(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item7 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem7(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item8 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem8(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item9 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem9(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item10 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem10(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Enter Item11 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem11(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter Item12 details</label>
                        <input type="text" placeholder='Enter the Item1 Details' className='form-control'
                            onChange={(e) => setItem12(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CreateUsers;