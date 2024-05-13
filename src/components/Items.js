import React, { useState, useEffect } from 'react';
import productsData from '../files/Products.json'; 
import './styles/items.css';

function Items(category) {

    const [data, setData] = useState([]);

  useEffect(() => {
    setData(productsData);
  }, []);
   
    return (


        <div className='DisplaySpace'>
          {data.map((item) => (
            <div className="MyCard">
              <img src={item.img} alt={item.name} />
              <h5>{item.name}</h5>
              <p>{item.Price}</p>
            </div>
          ))}
        </div>


    );
  }
  
  export default Items;