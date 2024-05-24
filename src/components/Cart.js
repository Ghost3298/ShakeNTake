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
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Flavor</th>
                            <th>Price/Unit</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <tr key={index} className="cart-item">
                                    <td>{item.name}</td>
                                    <td>{item.flavor}</td>
                                    <td>{item.price} $</td>
                                    <td><img src={item.img} alt={item.name} /></td>
                                    <td></td>
                                    <td></td>
                                    <td><button>remove</button></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">Your cart is empty.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default Cart;
