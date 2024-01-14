import React from 'react';
import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.css';
// Import only the styles you need
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';



const Footer = () => {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
            <a href="https://wa.me/+96170351850" target="_blank" rel="nonreferrer" style={{ textDecoration : "none" , color : 'white'}}><MDBIcon fab icon="whatsapp" /></a>
          </MDBBtn>

        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="https://www.instagram.com/shadow.den.lb/" target="_blank" rel="nonreferrer">
        Shadow Den
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
