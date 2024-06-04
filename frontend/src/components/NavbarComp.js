import { Navbar, Container, Nav } from 'react-bootstrap';
import { navLinks } from '../data/Data';
import { NavLink } from 'react-router-dom';
import icon from '../assets/icon-mopart.png';
import defaultprofile from '../assets/pembuat-male.png'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';

const NavbarComp = () => {
  let navigate = useNavigate();
  const {isAuth, userid, photo_profile, logout} = useContext(AuthContext)
  const url = photo_profile? photo_profile : defaultprofile 
  const [dropdownvisible, setdropdownvisible] = useState(false)
  console.log(url)
  const handleClickLogout = () =>{
    logout()
    setdropdownvisible(!dropdownvisible)
    navigate('/')
  }
  const handleClickDropdown = () =>{
     setdropdownvisible(!dropdownvisible)
  }
  return (
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
                      <a onClick={() => navigate(`/profil?id=${userid}`)}>Profile</a>
                      <a href="">Pemberitahuan</a>
                      <a href="">Pesan</a>
                      <a href="">Pengaturan</a>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
