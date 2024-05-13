import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../files/Products.json'; 
import './styles/items.css';
import Navigation from './Nav';
import MyCarousel from './MyCarousel';
import Footer from './Footer';

function Items() {
    const { category } = useParams(); // Extract category from URL parameters

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Category:", category); // Debugging
        // Filter productsData based on the category
        const filteredData = productsData.filter(item => item.category === category);
        console.log("Filtered Data:", filteredData); // Debugging
        setData(filteredData);
    }, [category]); // Trigger useEffect when category changes
   
    return (
        <div className="App">
            <Navigation />
            <MyCarousel />
            <div className='DisplaySpace'>
                {data.map((item) => (
                    <div className="MyCard" key={item.name}>
                        <img src={item.img} alt={item.name} />
                        <h5>{item.name}</h5>
                        <p>{item.Price}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Items;
