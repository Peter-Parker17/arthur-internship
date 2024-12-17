import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../home/owl.css'

const MyCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide(currentSlide + 1);
    };

    const handlePrev = () => {
        setCurrentSlide(currentSlide - 1);
    };

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
        <div>

            <button onClick={handlePrev}>Prev</button>
            <OwlCarousel className="owl" {...options}
                items={1}
                loop
                margin={10}
                nav={false}
                dots={false}
                ref={(owl) => (this.owl = owl)}
                onChange={(event) => setCurrentSlide(event.item.index)}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            <button onClick={handleNext}>Next</button>
            </OwlCarousel>
        </div>
    );
};

export default MyCarousel;