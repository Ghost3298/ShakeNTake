import React, { useState, useEffect } from 'react';
import categoriesData from '../files/Categories.json';
import './styles/CategoriesDisplay.css';

function CategoriesDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(categoriesData);
  }, []);

  return (
    <>
      {data.map((item) => (
        <div className="MyCard" key={item.key}>
          <a href={`Items?category=${item.name}`}>
          <img src={item.imgSrc} alt={item.name} />
          <h5>{item.name}</h5>
          </a>
        </div>
      ))}
    </>
  );
}

export default CategoriesDisplay;
