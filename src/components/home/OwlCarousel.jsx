import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../home/owl.css'

const MyCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 6 },
      1000: { items: 5 }
    }
  };

  return (
    <OwlCarousel className="owl" {...options}>
    </OwlCarousel>
  );
};

export default MyCarousel;