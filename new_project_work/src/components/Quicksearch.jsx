import React, { useEffect , useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './quicksearch.css'
export default function Quicksearch() {
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
    const location = useLocation();
    // const queryparams = new URLSearchParams(location.search);
     
    // const shopid=queryparams.get('shop');
    // const imagesrc=queryparams.get('image')
    // const names=queryparams.get('name')
    const { imageID , imageurl , name} =location.state || {};
    axios.get('http://localhost:9001/getdetails/' + imageID)
    .then(result => {
      console.log("Get Quicksearch data"+JSON.stringify(result.data));
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
  return (
    <>
      <div className="container">
     {/* <div style={{textAlign:'center'}}>
    <h1>Welocome to {names}</h1>
    <div>shopid:{shopid}</div>
   <img src={imagesrc} alt="" srcset="" height={'500px'} /> 
   </div> 
        Image Section  */}
       <div className="image-section">
      <img src={imageurl} alt="Section" />
    </div>

      {/* Grid Section with Four Columns */}
      <div className="grid-section">
      <div className="grid">
      <h2>{name}</h2>
      <div className="grid-content">
        {/* Example of grid items */}
        <div className="grid-item">
          item 1
          <div>{item1}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 2
        <div>{item2}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 3
        <div>{item3}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 4
        <div>{item4}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
      </div>
    </div>
      <div className="grid">
      <h2>{name}</h2>
      <div className="grid-content">
        {/* Example of grid items */}
        <div className="grid-item">
          item 1
          <div>{item5}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 2
        <div>{item6}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 3
        <div>i{item7}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 4
        <div>{item8}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
      </div>
    </div>
      <div className="grid">
      <h2>{name}</h2>
      <div className="grid-content">
        {/* Example of grid items */}
        <div className="grid-item">
          item 1
          <div>{item9}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 2
        <div>{item10}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 3
        <div>{item11}</div>
          <div>iam 3</div>
          <div>iam 4</div>
          <div>iam 4</div>
        </div>
        <div className="grid-item">Item 4
        <div>{item12}</div>
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
