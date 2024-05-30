import SlideHeaderComp from '../components/SlideHeaderComp';
import SearchComp from '../components/SearchComp';
import FooterComp from '../components/FooterComp';
import foto1 from '../assets/galeri-1.png';
import foto2 from '../assets/galeri-2.png';
import foto3 from '../assets/galeri-3.png';
import foto4 from '../assets/galeri-4.png';
import foto5 from '../assets/galeri-5.png';
import foto6 from '../assets/galeri-6.png';
import foto7 from '../assets/galeri-7.png';
import foto8 from '../assets/galeri-8.png';
import foto9 from '../assets/galeri-9.png';
import NavbarComp from '../components/NavbarComp';

const Galeri = () => {
  return (
    <div>
      <NavbarComp />
      <SlideHeaderComp />
      <SearchComp />
      <div className="galeri">
        <div className="foto-galeri row justify-content-center">
          <div className="col-md-4 mb-4">
            <img src={foto1} alt="foto1" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={foto2} alt="foto2" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={foto3} alt="foto3" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={foto4} alt="foto4" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={foto5} alt="foto5" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={foto6} alt="foto6" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={foto7} alt="foto7" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={foto8} alt="foto8" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={foto9} alt="foto9" />
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default Galeri;
