import logo from '../assets/icon-mopart.png';
import logoGithub from '../assets/icon-github-footer.png';
import logoIg from '../assets/icon-ig-footer.png';
import logoFb from '../assets/icon-fb-footer.png';

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={logo} alt="MoPart" className="logo-mopart-footer" />
        <div className="icon-social">
          <a href="">
            <img src={logoGithub} alt="instagram" className="logo-github" />
          </a>
          <a href="">
            <img src={logoIg} alt="facebook" className="logo-ig" />
          </a>
          <a href="">
            <img src={logoFb} alt="github" className="logo-fb" />
          </a>
        </div>
      </div>
      <div className="text-container">
        <p className="text">
          Memberi informasi mengenai tren dan <br />
          perkembangan terbaru dalam seni lukis <br />
          untuk memahami preferensi dan <br />
          ekspektasi penggemar seni.
        </p>
      </div>
    </footer>
  );
};

export default FooterComp;
