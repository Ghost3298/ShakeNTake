import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import './MainPage.css';

const MainPage = () => {
  return (
    <Container className="mt-4">
      {/* Carousel */}
      <Carousel className="my-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Some description for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/401"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Some description for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/402"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Some description for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Cards */}
      <Row className="mt-4">
        <Col xs={12} sm={6} md={6} lg={4} className="custom-margin">
          <Card>
            <Card.Img variant="top" src="https://placekitten.com/300/200" />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Some description for Card 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className="custom-margin">
          <Card>
            <Card.Img variant="top" src="https://placekitten.com/300/201" />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>Some description for Card 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className="custom-margin">
          <Card>
            <Card.Img variant="top" src="https://placekitten.com/300/202" />
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>Some description for Card 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className="custom-margin">
          <Card>
            <Card.Img variant="top" src="https://placekitten.com/300/200" />
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>Some description for Card 4.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className="custom-margin">
          <Card>
            <Card.Img variant="top" src="https://placekitten.com/300/201" />
            <Card.Body>
              <Card.Title>Card 5</Card.Title>
              <Card.Text>Some description for Card 5.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className="custom-margin">
          <Card>
            <Card.Img variant="top" src="https://placekitten.com/300/202" />
            <Card.Body>
              <Card.Title>Card 6</Card.Title>
              <Card.Text>Some description for Card 6.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
