import { Carousel } from 'react-bootstrap';
import slide1 from '../assets/header-1.png';
import slide2 from '../assets/header-2.png';
import slide3 from '../assets/header-3.png';
import slide4 from '../assets/header-4.png';
import slide5 from '../assets/header-5.png';

const SlideHeaderComp = () => {
  return (
    <Carousel className="carousel-header animate__animated animate__fadeInUp animate__delay-1s">
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="lukisan 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="lukisan 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="lukisan 3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide4} alt="lukisan 4" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide5} alt="lukisan 5" />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideHeaderComp;
