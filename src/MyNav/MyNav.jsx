import './MyNav.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from '../GlobalState/GlobalState';

const MyNav = () => {
  const { setMe, setWork, setSkills, setContact } = useContext(MainContext);

  const handleSelect = (e) => {
    if (e.currentTarget.id === 'nav-me') {
      setMe(true);
      setContact(false);
      setSkills(false);
      setWork(false);
    } else if (e.currentTarget.id === 'nav-work') {
      setWork(true);
      setMe(false);
      setContact(false);
      setSkills(false);
    } else if (e.currentTarget.id === 'nav-skills') {
      setSkills(true);
      setContact(false);
      setMe(false);
      setWork(false);
    } else if (e.currentTarget.id === 'nav-contact') {
      setContact(true);
      setMe(false);
      setSkills(false);
      setWork(false);
    }
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="my-nav" variant="dark">
        <Container>
          <Navbar.Brand to="/"> Hi, Im Magda</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <div id="nav-me" className="links-navbar" onClick={handleSelect}>
                About me
              </div>
              <div
                id="nav-skills"
                className="links-navbar"
                onClick={handleSelect}
              >
                My skills
              </div>
              <div
                id="nav-work"
                className="links-navbar"
                onClick={handleSelect}
              >
                My projects
              </div>

              <div
                id="nav-contact"
                className="links-navbar"
                onClick={handleSelect}
              >
                Contact
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNav;
