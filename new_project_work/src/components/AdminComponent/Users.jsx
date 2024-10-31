import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link ,  useNavigate} from 'react-router-dom'
const Users = () => {
    const [users, setUsers] = useState([]);
    const [details, setdetails] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
        axios.get('http://localhost:9001/users')
            .then(result => {
                setUsers(result.data)
                console.log("Users Page get dashboard" + result.data);
                return axios.get('http://localhost:9001/getdetails')
            })
            .then(result => {
                console.log("Users Page get details" + result.data);
                setdetails(result.data)
            })
            .catch(error => console.log(error))
    }, [])
    const handledelete = (id) => {
        axios.delete('http://localhost:9001/deleteUser/' + id)
            .then(result => {
                console.log("delted darshboard" + result.data)
                return axios.delete('http://localhost:9001/deletedetails/' + id)

            })
            .then(result => {
                console.log("delted quicksearch details" + result.data)
                window.location.reload()
            })
            .catch(error => console.log("cannot able to delete"+error))
    }
    const handleexit=()=>{
        navigate('/')
     }
    return (
        <div className=''>
            <div className='w-100 bg-white rounded p-3 '>
            <button className='bg-danger m-4 p-1' onClick={()=>handleexit()} >Exit</button>
                <Link to="/create" className='btn btn-success'>Add+</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Content</td>
                            <td>imageurl</td>
                            <td>imageID</td>
                            <td>item-1</td>
                            <td>item-2</td>
                            <td>item-3</td>
                            <td>item-4</td>
                            <td>item-5</td>
                            <td>item-6</td>
                            <td>item-7</td>
                            <td>item-8</td>
                            <td>item-9</td>
                            <td>item-10</td>
                            <td>item-11</td>
                            <td>item-12</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(({ name, content, imageurl, imageID }) => (
                                <tr key={imageID}>
                                    <td>{name}</td>
                                    <td>{content}</td>
                                    <td>{imageurl}</td>
                                    <td>{imageID}</td>
                                    {details.map(({ imagesid, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12 }) => (
                                        <React.Fragment >
                                            <td>{item1}</td>
                                            <td>{item2}</td>
                                            <td>{item3}</td>
                                            <td>{item4}</td>
                                            <td>{item5}</td>
                                            <td>{item6}</td>
                                            <td>{item7}</td>
                                            <td>{item8}</td>
                                            <td>{item9}</td>
                                            <td>{item10}</td>
                                            <td>{item11}</td>
                                            <td>{item12}</td>
                                        </React.Fragment>
                                    ))}
                                    <td>
                                        <Link to={`/update/${imageID}`} className='btn btn-success'>Update</Link>
                                        <button className='btn btn-danger'
                                            onClick={(e) => handledelete(imageID)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Users;