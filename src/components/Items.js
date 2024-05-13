import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Nav';
import Footer from './Footer';
import productsData from '../files/Products.json'; // Import product data from Products.json
import './styles/items.css';

function Items() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    // Filter products based on category
    const filteredProducts = productsData.filter(product => product.category === category);

    return (
        <div className="App">
            <Navigation />
            <div className='DisplaySpace'>
                {filteredProducts.length === 0 ? (
                    <p>No Items Found in this category.</p>
                ) : (
                    // Render filtered products
                    filteredProducts.map(product => (
                        <div key={product.name}>
                            <h2>{product.name}</h2>
                            <p>Category: {product.category}</p>
                            <p>Price: {product.Price}</p>
                            <p>Sale: {product.Sale}</p>
                            <img src={product.img} alt={product.name} />
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Items;
