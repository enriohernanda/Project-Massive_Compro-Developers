import SlideHeaderComp from '../components/SlideHeaderComp';
import SearchComp from '../components/SearchComp';
import FooterComp from '../components/FooterComp';
import CardSeniman from '../components/CardSeniman';
import pembuatMale from '../assets/pembuat-male.png';
import pembuatFemale from '../assets/pembuat-female.png';
import NavbarComp from '../components/NavbarComp';

const Seniman = () => {
  return (
    <div>
      <NavbarComp />
      <SlideHeaderComp />
      <SearchComp />
      <div className="profil-seniman text-center">
        <div className="seniman row justify-content-center">
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatMale} nama="Da Vinci" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatFemale} nama="Elizabeth" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatMale} nama="Jack" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatFemale} nama="Maya" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatFemale} nama="Angel" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatMale} nama="Johnson" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatFemale} nama="Vexana" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatMale} nama="Harley" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatMale} nama="Helcurt" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatFemale} nama="Hana" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatMale} nama="Alucard" />
          </div>
          <div className="col-md-3 mb-3">
            <CardSeniman foto={pembuatFemale} nama="Miya" />
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default Seniman;
