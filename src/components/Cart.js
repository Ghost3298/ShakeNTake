import React, { useState, useEffect } from 'react';
import Navigation from './Nav';
import Footer from './Footer';
import { getCartItems } from './addToCart';
import './styles/cart.css';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = getCartItems();
        setCartItems(items);
    }, []);

    return (
        <>
            <Navigation />
            <div className="cart-container">
                <h1>Your Cart</h1>
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <div className='item-name'>{item.name}  {item.flavor}</div>
                                    <div className='item-price'>Price: {item.price} $</div>
                                    <div className='item-image'><img src='/images/Products/100 Whey.jpg' alt={item.name} className='CartImage'/></div>
                                    <div className='item-quantity'></div>
                                    <div className='item-total'></div>
                                    <div className='item-remove'><button>remove</button></div>
                                </div>
                            ))
                        ) : (
                            <div>
                                <span>Your cart is empty.</span>
                            </div>
                        )}
                
            </div>
            <Footer />
        </>
    );
}

export default Cart;
