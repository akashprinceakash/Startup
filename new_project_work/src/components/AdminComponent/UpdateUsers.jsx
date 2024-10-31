import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const UpdateUsers = () => {
    const { id } = useParams();
    const [name, setName] = useState();
    const [content, setContent] = useState();
    const [imageurl, setImageurl] = useState();
    const [imageID, setimageID] = useState();
    // const [imagesid, setimagesid] = useState();
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
    useEffect(() => {


        axios.get('http://localhost:9001/getUser/' + id)
            .then(result => {
                console.log("Get dashboard data" + JSON.stringify(result.data))
                setName(result.data.name)
                setContent(result.data.content)
                setImageurl(result.data.imageurl)
                setimageID(result.data.imageID)
                return axios.get('http://localhost:9001/getdetails/' + id)
            })
            .then(result => {
                console.log("Get Quicksearch data" + JSON.stringify(result.data));
                // Destructure result data directly in the state updates
                const {
                    item1, item2, item3, item4, item5, item6,
                    item7, item8, item9, item10, item11, item12
                } = result.data;
                setItem1(item1)
                setItem2(item2)
                setItem3(item3)
                setItem4(item4)
                setItem5(item5)
                setItem6(item6)
                setItem7(item7)
                setItem8(item8)
                setItem9(item9)
                setItem10(item10)
                setItem11(item11)
                setItem12(item12)
            })
            .catch(error => console.log(error))
        // axios.get('http://localhost:9001/getdetails/' + imageID)
        //     .then(result => {
        //         console.log(result)
        //         setItem1(result.data.item1)
        //         setItem2(result.data.item2)
        //         setItem3(result.data.item3)
        //         setItem4(result.data.item4)
        //         setItem5(result.data.item5)
        //         setItem6(result.data.item6)
        //         setItem7(result.data.item7)
        //         setItem8(result.data.item8)
        //         setItem9(result.data.item9)
        //         setItem10(result.data.item10)
        //         setItem11(result.data.item11)
        //         setItem12(result.data.item12)
        //     })
        //     .catch(error => console.log(error))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:9001/updateUser/' + imageID, { name, content, imageurl, imageID })
            .then(result => {
                console.log("Update Dashboard data" + JSON.stringify(result.data));
                return axios.put('http://localhost:9001/updatedetails/' + imageID, { item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12 });
            })
            .then(result => {
                console.log("Update Quicksearch Data" + JSON.stringify(result.data))

                navigate('/users')
            })
            .catch(error => console.log(error))
        // axios.put('http://localhost:9001/updatedetails/' + imageID, { item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12 })
        //     .then(result => {
        //         console.log(result);
        //         navigate('/users')
        //     })
        //     .catch(error => console.log(error))
    }
    return (
        <div className='d-flex  bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2>Update Users</h2>
                    <div className="mb-2">
                        <label htmlFor=""> Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Contents</label>
                        <input type="text" placeholder='Enter Contents' className='form-control'
                            value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Image-URL</label>
                        <input type="text" placeholder='Enter image path' className='form-control'
                            value={imageurl} onChange={(e) => setImageurl(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Image-ID</label>
                        <input type="Number" placeholder='Enter image-ID' className='form-control'
                            value={imageID} onChange={(e) => setimageID(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-1</label>
                        <input type="text" placeholder='Enter Item-1' className='form-control'
                            value={item1} onChange={(e) => setItem1(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-2</label>
                        <input type="text" placeholder='Enter Item-2' className='form-control'
                            value={item2} onChange={(e) => setItem2(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-3</label>
                        <input type="text" placeholder='Enter Item-3' className='form-control'
                            value={item3} onChange={(e) => setItem3(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-4</label>
                        <input type="text" placeholder='Enter Item-4' className='form-control'
                            value={item4} onChange={(e) => setItem4(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-5</label>
                        <input type="text" placeholder='Enter Item-5' className='form-control'
                            value={item5} onChange={(e) => setItem5(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-6</label>
                        <input type="text" placeholder='Enter Item-6' className='form-control'
                            value={item6} onChange={(e) => setItem6(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-7</label>
                        <input type="text" placeholder='Enter Item-7' className='form-control'
                            value={item7} onChange={(e) => setItem7(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-8</label>
                        <input type="text" placeholder='Enter Item-8' className='form-control'
                            value={item8} onChange={(e) => setItem8(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-9</label>
                        <input type="text" placeholder='Enter Item-9' className='form-control'
                            value={item9} onChange={(e) => setItem9(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-10</label>
                        <input type="text" placeholder='Enter Item-10' className='form-control'
                            value={item10} onChange={(e) => setItem10(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-11</label>
                        <input type="text" placeholder='Enter Item-11' className='form-control'
                            value={item11} onChange={(e) => setItem11(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Item-12</label>
                        <input type="text" placeholder='Enter Item-12' className='form-control'
                            value={item12} onChange={(e) => setItem12(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}
export default UpdateUsers;