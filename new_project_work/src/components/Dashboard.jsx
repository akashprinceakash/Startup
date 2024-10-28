import React, { useEffect, useState } from 'react'
import './dashboard.css'
// import { Carousel } from "react-responsive-carousel";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';



const dashboard = ({ user }) => {
  const [quicksearchData, setquicksearchData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:9001/quicksearch')
      .then((response) => {
        // console.log(response);
        setquicksearchData(response.data)
      })
      .catch((error) => {
        console.log(error)

      })
  }, [])


  const handlequicksearch = (shopid, imagesrc, names) => {
    navigate(`/qs?shop=${shopid}&image=${imagesrc}&name=${names}`)
  }
 

  return (
    <>


      <div className="quick-search">
        <div className='categories' >
          {quicksearchData.map((item) => {
            const { name, content, image, shop } = item;
            return <div className="category" key={shop} >


              <img src={`/${image}`} alt="no image" onClick={() => handlequicksearch(shop, image, name)} />

              <h4>{name}</h4>
              <div>{content}</div>
            </div>
          })}
        </div>

      </div>
    </>
  )
}
export default dashboard;