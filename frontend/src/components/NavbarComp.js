import { Navbar, Container, Nav } from 'react-bootstrap';
import { navLinks } from '../data/Data';
import { NavLink } from 'react-router-dom';
import icon from '../assets/icon-mopart.png';
import defaultprofile from '../assets/pembuat-male.png';
import Notification from './NotificationContent';

import { useNavigate } from 'react-router-dom';

import Massage from './Message';

import { AuthContext } from '../context/AuthContext';
import { useContext, useState, useRef, useEffect } from 'react';
import { getNotification } from '../service/apiService'

const NavbarComp = () => {
  let navigate = useNavigate();
  const contentRef = useRef(null)
  const contentRefSetting = useRef(null)
  const contentRefNotif = useRef(null)
  const {isAuth, userid, photo_profile, logout} = useContext(AuthContext)
  const url = photo_profile? photo_profile : defaultprofile 
  const [dropdownvisible, setdropdownvisible] = useState(false)
  const [massageVisible, setMassageVisible] = useState(false)
  const [notifVisible, setNotifVisible] = useState(false)
  const [settingVisible, setSettingVisible] = useState(false)


  
  console.log(url)
  const handleClickLogout = () =>{
    logout()
    setdropdownvisible(!dropdownvisible)
    navigate('/')
  }
  const handleClickDropdown = () =>{
     setdropdownvisible(!dropdownvisible)
  }
  const handleclickvsiblemassage = () => {
    setMassageVisible(!massageVisible)
    setNotifVisible(false)
    setSettingVisible(false)
  }
  const handleclickvsiblenotif = () => {
    setMassageVisible(false)
    setNotifVisible(!notifVisible)
    setSettingVisible(false)
  }
  const handleclickvsiblesetting = () => {
    setMassageVisible(false)
    setNotifVisible(false)
    setSettingVisible(!settingVisible)
  }
  const outAreaClick = (event) => {
    if (contentRef.current && !contentRef.current.contains(event.target)) {
        setMassageVisible(false)
    }
    if (contentRefSetting.current && !contentRefSetting.current.contains(event.target)) {
      setSettingVisible(false)
    }
    if (contentRefNotif.current && !contentRefNotif.current.contains(event.target)) {
      setNotifVisible(false)
    }
}
useEffect(() => {
    document.addEventListener('click', outAreaClick, true);
    return () => {
        document.addEventListener('click', outAreaClick, true);
    }
}, [])
  return (
    <div>

    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={icon} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')} end>
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>
          <div>
            {isAuth? (
                <div className="cover-profile">
                  <img className='photo-profile'
                    src={url} onClick={handleClickDropdown}/>
                    {dropdownvisible && (
                    <div className="dropdown">
                      <a onClick={() => navigate(`/${userid}/profil`)}>Profile</a>
                      <a onClick={handleclickvsiblenotif}>Pemberitahuan</a>
                      <a onClick={handleclickvsiblemassage}>Pesan</a>
                      <a onClick={handleclickvsiblesetting}>Pengaturan</a>
                      <a onClick={handleClickLogout}>Keluar</a>
                    </div>)}
                </div>
            ) : (
              <div className="text-center">
              <button className="btn_masuk" onClick={() => navigate('/masuk')}>
                Masuk
              </button>
            </div> 
            )}
          </div>
          <div>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <div ref={contentRef}>
              {massageVisible && (
                <Massage  />
              )}
            </div>
      {settingVisible? 
      <div class="pengaturan-container" ref={contentRefSetting}>
        <div>
          Photo profil
        </div>
        <input type="file" placeholder="File" draggable="true" />
        <select name="" id="" draggable="true">
            <option value="Indonesia">Indonesia</option>
            <option value="Amerika">Amerika</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Inggris">Inggris</option>
        </select>
        <select name="" id="">
            <option value="Programer">Programer</option>
            <option value="Petani">Petani</option>
            <option value="Seniman">Seniman</option>
            <option value="Designer">Designer</option>
            <option value="Karyawan">Karyawan</option>
            <option value="Guru">Guru</option>
            <option value="Freelance">Freelance</option>
            <option value="Polisi">Polisi</option>
            <option value="Siswa">Siswa</option>
            <option value="Mahasiswa">Mahasiswa</option>
        </select>
        <div>
            <p>Instagram</p>
            <input type="text" />
        </div>
        <div>
            <p>Youtube</p>
            <input type="text" />
        </div>
        <div>
            <p>Facebook</p>
            <input type="text" />
        </div>
        <button>Kirim</button>
    </div> : ""}

    {notifVisible ? 
    <div ref={contentRefNotif}>
      <Notification />
    </div>: ""}
    </div>
  );
};

export default NavbarComp;
