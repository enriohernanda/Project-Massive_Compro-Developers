import { Navbar, Container, Nav } from 'react-bootstrap';
import { navLinks } from '../data/Data';
import { NavLink } from 'react-router-dom';
import icon from '../assets/icon-mopart.png';

import { useNavigate } from 'react-router-dom';

const NavbarComp = () => {
  let navigate = useNavigate();

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
          <div className="text-center">
            <button className="btn_masuk" onClick={() => navigate('/masuk')}>
              Masuk
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
