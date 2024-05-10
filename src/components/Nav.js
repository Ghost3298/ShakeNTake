import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Data from "../files/Categories.json"
import './styles/nav.css';

function Navigation() {
    const [expandNavbar, setExpandNavbar] = useState(true);

    useEffect(() => {
        function handleResize() {
            setExpandNavbar(window.innerWidth >= 768);
        }

        window.addEventListener('resize', handleResize);

        handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Navbar expand={expandNavbar} className="bg-black" variant="dark" data-bs-theme="dark" bg="dark" style={{ boxShadow : "0 1px 10px 0 rgba(255, 255, 255, 0.1)" , zIndex : "999" }} fixed="top">
                <Container fluid>
                    <Navbar.Brand href="../">Shake N Take</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
                    <Navbar.Offcanvas id="offcanvasNavbar-expand-false" aria-labelledby="offcanvasNavbarLabel-expand-false" placement="end" data-bs-theme="dark">
                        <Offcanvas.Header className="offCanvas" closeButton />
                        <Offcanvas.Body className="offCanvas">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action2">Contact Us</Nav.Link>
                                <NavDropdown title="Categories" style={{position : 'relative', right : '10' }} id="offcanvasNavbarDropdown-expand-false" align="end">
                                    {
                                        Data.map(category => (
                                            <NavDropdown.Item key={category.name} href={category.link}>{category.name}</NavDropdown.Item>
                                        ))
                                    }
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
