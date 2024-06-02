import SlideHeaderComp from '../components/SlideHeaderComp';
import SearchComp from '../components/SearchComp';
import FooterComp from '../components/FooterComp';
import CardSeniman from '../components/CardSeniman';
import pembuatMale from '../assets/pembuat-male.png';
import pembuatFemale from '../assets/pembuat-female.png';
import NavbarComp from '../components/NavbarComp';

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../service/apiService';

const Seniman = () => {
  let navigate = useNavigate();
  const [userdata, setUserData]= useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await getUsers()
        console.log(response)
        setUserData(response.result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchdata()
  }, [])
  return (
    <div>
      <NavbarComp />
      <SlideHeaderComp />
      <SearchComp />
      <div className="profil-seniman text-center">
        <div className="seniman row justify-content-center">
          {userdata.length > 0? userdata.map((user ,index ) => (
            <div key={index} className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate(`/Profil?id=${user.id}`)}>
            <CardSeniman foto={user.photo? `http://${user.photo}` : pembuatMale } nama={user.username.substring(0, 10)} />
          </div>
          )): (<div></div>) }
          
          {/* <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatFemale} nama="Elizabeth" />
          </div>
          <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatMale} nama="Jack" />
          </div>
          <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatFemale} nama="Maya" />
          </div>
          <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatFemale} nama="Angel" />
          </div>
          <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatMale} nama="Johnson" />
          </div>
          <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatFemale} nama="Vexana" />
          </div>
          <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatMale} nama="Harley" />
          </div>
          <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatMale} nama="Helcurt" />
          </div>
          <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatFemale} nama="Hana" />
          </div>
          <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatMale} nama="Alucard" />
          </div>
          <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/Profil')}>
            <CardSeniman foto={pembuatFemale} nama="Miya" />
          </div> */}
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default Seniman;
