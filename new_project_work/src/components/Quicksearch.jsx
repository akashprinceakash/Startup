import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './quicksearch.css'
export default function Quicksearch() {
    const location = useLocation();
    const queryparams = new URLSearchParams(location.search);
     
    // const shopid=queryparams.get('shop');
    const imagesrc=queryparams.get('image')
    const names=queryparams.get('name')
  return (
    <>
      <div className="container">
    {/* <div style={{textAlign:'center'}}>
    <h1>Welocome to {names}</h1>
    <div>shopid:{shopid}</div>
   <img src={imagesrc} alt="" srcset="" height={'500px'} /> 
   </div> */}
       {/* Image Section */}
       <div className="image-section">
      <img src={imagesrc} alt="Section" />
    </div>

      {/* Grid Section with Four Columns */}
      <div className="grid-section">
      <div className="grid">
      <h2>{names}</h2>
      <div className="grid-content">
        {/* Example of grid items */}
        <div className="grid-item">
          item 1
          <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 2
        <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 3
        <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 4
        <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
      </div>
    </div>
      <div className="grid">
      <h2>{names}</h2>
      <div className="grid-content">
        {/* Example of grid items */}
        <div className="grid-item">
          item 1
          <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 2
        <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 3
        <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 4
        <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
      </div>
    </div>
      <div className="grid">
      <h2>{names}</h2>
      <div className="grid-content">
        {/* Example of grid items */}
        <div className="grid-item">
          item 1
          <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 2
        <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 3
        <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 4
        <div>iam 2</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
      </div>
    </div>
 
    </div>

      {/* Details Section */}
      <section className="details">
        <p>Details about the content go here. This can be a longer text area.</p>
      </section>

      {/* Grid Section (repeated) */}
   
      </div>
    </>
  )
}
