import React, { useEffect, useState } from 'react'
import './dashboard.css'
// import { Carousel } from "react-responsive-carousel";
import { useNavigate } from 'react-router-dom';
// import Footer from './Footer';
import axios from 'axios';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const dashboard = ({ user }) => {
  const [quicksearchData, setquicksearchData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:9001/users')
      .then((response) => {
        // console.log(response);
        setquicksearchData(response.data)
      })
      .catch((error) => {
        console.log(error)

      })
  }, [])


  const handlequicksearch = (id, url , name) => {
    const data={
      imageID:id,
      imageurl:url,
      name:name
    };
    // navigate(`/qs?shop=${shopid}&image=${imagesrc}&name=${names}`)
    navigate('/qs',{state : data});
  }

   // Carousel settings
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
 
  return (
    <>
      <div className="quick-search">
      
        <div className='categories' >
        
          {quicksearchData.map((item) => {
            const { name, content, imageurl , imageID } = item;
            return ( 
                
            <div className="category" key={imageID}>
          <Slider {...settings}>
            <img src={imageurl.startsWith("http") ? imageurl : `/${imageurl}`} alt="no image" onClick={() => handlequicksearch(imageID , imageurl , name)} style={{ width: '100%', borderRadius: '10px' }} />
           <h4>{name}</h4>
              <div>{content}</div>
              </Slider>
            </div>   )
          })}
         
        </div>
       
      </div>
    </>
  )
}
export default dashboard;