import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import productsData from '../files/Products.json';
import './styles/items.css';
import Navigation from './Nav';
import MyCarousel from './MyCarousel';
import Footer from './Footer';
import {addToCart} from './addToCart';

function Items() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');

    const [data, setData] = useState([]);
    const [selectedFlavors, setSelectedFlavors] = useState({});

    useEffect(() => {
        // Filter productsData based on the category
        const filteredData = productsData.filter(item => item.category === category);
        setData(filteredData);
    }, [category]); // Trigger useEffect when category changes

    const handleFlavorChange = (id, flavor) => {
        setSelectedFlavors(prevState => ({ ...prevState, [id]: flavor }));
    };

    const handleAddToCart = (id, name, flavors, price) => {
        const selectedFlavor = flavors ? selectedFlavors[id] || flavors[0] : null;
        addToCart(id, name, selectedFlavor, price); // Pass the price to addToCart
    };
    

    return (
        <div className="App">
            <Navigation />
            <MyCarousel />
            <div className='DisplaySpace'>
                {data.map((item) => (
                    <div className="MyCard" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <div className="CardContent">
                            <h5>{item.name}</h5>
                            {item.Sale > 0 ? (
                                <div>
                                    <p className="original-price">
                                        <span style={{ textDecoration: 'line-through' }}>
                                            {item.Price.toFixed(2)} $
                                        </span>
                                        &nbsp;
                                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                                            {(item.Price * (1 - item.Sale / 100)).toFixed(2)} $
                                        </span>
                                    </p>
                                </div>
                            ) : (
                                <p>{item.Price.toFixed(2)} $</p>
                            )}
                        </div>
                        {item.Flavors && item.Flavors.length > 0 ? (
                            <div>
                                <select
                                    className='CartButton'
                                    onChange={(e) => handleFlavorChange(item.id, e.target.value)}
                                >
                                    <option className='flavorsButton' value="">
                                        Select Flavor
                                    </option>
                                    {item.Flavors.map((flavor, index) => (
                                        <option key={index} value={flavor}>
                                            {flavor}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    className='CartButton'
                                    onClick={() => handleAddToCart(item.id, item.name, item.Flavors, item.Price)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        ) : (
                            <button
                                className='CartButton'
                                onClick={() => handleAddToCart(item.id, item.name, null, item.Price)}
                            >
                                Add to cart
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Items;
