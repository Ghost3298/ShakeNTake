import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import carouselData from '../files/Carousel.json';
import './styles/MyCarousel.css'; // CSS file for styles

function MyCarousel() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setData(carouselData);
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="Carousel">
      {data.map((item, idx) => (
        <Carousel.Item key={idx}>
          {/* Image wrapper with defined height and object-fit property */}
          <div className="carousel-image-wrapper">
            <img
              className="carousel-image"
              src={item.imgSrc}
              alt={item.alt}
              onError={() => console.error(`Error loading image: ${item.imgSrc}`)}
            />
          </div>
          <Carousel.Caption>
            <h3>{item.label}</h3>
            <p>{item.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
