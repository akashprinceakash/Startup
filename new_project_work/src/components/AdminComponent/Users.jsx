import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link ,  useNavigate} from 'react-router-dom'
import { Table } from 'react-bootstrap';
const Users = () => {
    const [users, setUsers] = useState([]);
    const [details, setdetails] = useState([]);
    const [combinedData, setCombinedData] = useState([]);
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

      // Combine users and details data based on imageID and imagesid match
    useEffect(() => {
        const data = users.map(user => {
            const userDetail = details.find(detail => detail.imagesid === user.imageID);
            return { ...user, ...userDetail };
        });
        setCombinedData(data);
    }, [users, details]);

    const handleDelete = (id) => {
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
   
    return (
        <div className=''>
            <div className='w-100 bg-white rounded p-3 '>
            
                <Link to="/create" className='btn btn-success'>Add+</Link>
                {/* <table className='table'>
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
                                        <React.Fragment key={imagesid} >
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
                </table> */}
                <Table responsive="md" striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Content</th>
                    <th>Image URL</th>
                    <th>Image ID</th>
                    <th>Item 1</th>
                    <th>Item 2</th>
                    <th>Item 3</th>
                    <th>Item 4</th>
                    <th>Item 5</th>
                    <th>Item 6</th>
                    <th>Item 7</th>
                    <th>Item 8</th>
                    <th>Item 9</th>
                    <th>Item 10</th>
                    <th>Item 11</th>
                    <th>Item 12</th>
                </tr>
            </thead>
            <tbody>
                {combinedData.map((row, index) => (
                    <tr key={index}>
                        <td>{index > 0 && combinedData[index - 1].name === row.name ? '' : row.name}</td>
                        <td>{index > 0 && combinedData[index - 1].content === row.content ? '' : row.content}</td>
                        <td>{index > 0 && combinedData[index - 1].imageurl === row.imageurl ? '' : row.imageurl}</td>
                        <td>{index > 0 && combinedData[index - 1].imageID === row.imageID ? '' : row.imageID}</td>
                        <td>{row.item1}</td>
                        <td>{row.item2}</td>
                        <td>{row.item3}</td>
                        <td>{row.item4}</td>
                        <td>{row.item5}</td>
                        <td>{row.item6}</td>
                        <td>{row.item7}</td>
                        <td>{row.item8}</td>
                        <td>{row.item9}</td>
                        <td>{row.item10}</td>
                        <td>{row.item11}</td>
                        <td>{row.item12}</td>
                        <td>
                            {index === 0 || combinedData[index - 1].imageID !== row.imageID ? (
                                <>
                                    <Link to={`/update/${row.imageID}`} className='btn btn-success'>
                                        Update
                                    </Link>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => handleDelete(row.imageID)}
                                    >
                                        Delete
                                    </button>
                                </>
                            ) : null}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
            </div>
        </div>
    )
}
export default Users;