import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardPameran = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-pameran">
      <Slider {...settings}>
        <div className="card-pameran">
          <img src={props.image1} alt="konten" />
          <div className="intro">
            <h2>{props.judul1}</h2>
            <p>{props.text1}</p>
          </div>
        </div>
        <div className="card-pameran">
          <img src={props.image2} alt="konten" />
          <div className="intro">
            <h2>{props.judul2}</h2>
            <p>{props.text2}</p>
          </div>
        </div>
        <div className="card-pameran">
          <img src={props.image3} alt="konten" />
          <div className="intro">
            <h2>{props.judul3}</h2>
            <p>{props.text3}</p>
          </div>
        </div>
        <div className="card-pameran">
          <img src={props.image4} alt="konten" />
          <div className="intro">
            <h2>{props.judul4}</h2>
            <p>{props.text4}</p>
          </div>
        </div>
        <div className="card-pameran">
          <img src={props.image5} alt="konten" />
          <div className="intro">
            <h2>{props.judul5}</h2>
            <p>{props.text5}</p>
          </div>
        </div>
        <div className="card-pameran">
          <img src={props.image6} alt="konten" />
          <div className="intro">
            <h2>{props.judul6}</h2>
            <p>{props.text6}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CardPameran;
