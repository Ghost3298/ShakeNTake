import React, { useState, useEffect } from 'react';
import categoriesData from '../files/Categories.json';
import './styles/CategoriesDisplay.css';
import { Link } from 'react-router-dom';

function CategoriesDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(categoriesData);
  }, []);

  return (
    <>
      {data.map((item) => (
        <div className="MyCard" key={item.key}>
          <Link to={`/items?category=${encodeURIComponent(item.name)}`}>
            <img src={item.imgSrc} alt={item.name} />
            <h5>{item.name}</h5>
          </Link>
        </div>
      ))}
    </>
  );
}

export default CategoriesDisplay;
