import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Data from "../files/Categories.json";
import './styles/nav.css';
import { Link } from 'react-router-dom';
import { getCartItems } from './addToCart'; // Import the function correctly

function Navigation() {
    const [expandNavbar, setExpandNavbar] = useState(true);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        function handleResize() {
            setExpandNavbar(window.innerWidth >= 768);
        }

        function updateCartCount() {
            const items = getCartItems();
            setCartCount(items.length);
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('cartUpdated', updateCartCount); // Listen for the custom event

        handleResize(); // Initial call to set the navbar state based on initial window size
        updateCartCount(); // Initial call to update the cart count

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('cartUpdated', updateCartCount); // Clean up the event listener
        };
    }, []);

    return (
        <>
            <Navbar expand={expandNavbar} className="bg-black" variant="dark" data-bs-theme="dark" bg="dark" style={{ boxShadow: "0 1px 10px 0 rgba(255, 255, 255, 0.1)", zIndex: "999" }} fixed="top">
                <Container fluid>
                    <Navbar.Brand href="../">Shake N Take</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
                    <Navbar.Offcanvas id="offcanvasNavbar-expand-false" aria-labelledby="offcanvasNavbarLabel-expand-false" placement="end" data-bs-theme="dark">
                        <Offcanvas.Header className="offCanvas" closeButton />
                        <Offcanvas.Body className="offCanvas">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action2">Contact Us</Nav.Link>
                                <NavDropdown title="Categories" style={{ position: 'relative', right: '10' }} id="offcanvasNavbarDropdown-expand-false" align="end">
                                    {Data.map(category => (
                                        <NavDropdown.Item key={category.name}>
                                            <Link to={`/items?category=${encodeURIComponent(category.name)}`} className="links">{category.name}</Link>
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                                <div className='cartDiv' id="cartDiv">
                                    <Nav.Link href="#"><img src="images/cart.png" alt="cart" /></Nav.Link>
                                    {cartCount > 0 && (
                                        <div className="cart-badge">
                                            {cartCount}
                                        </div>
                                    )}
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
