import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import { MainContext } from '../GlobalState/GlobalState';
import { useContext, useEffect } from 'react';
import mail from '../assets/mail-black.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';

const Contact = () => {
  const { contact } = useContext(MainContext);
  useEffect(() => {
    if (contact === true) {
      let pageBottom = document.getElementById('bottomContact');
      console.log(pageBottom);
      pageBottom.scrollIntoView(true);
    }
  }, [contact]);

  return (
    <>
      <Container
        className="contact-main"
        style={{ display: contact === true ? 'block' : 'none' }}
      >
        <Row>
          <Col xs={4} className="column-left-contact">
            <div className="contact-wrapper">
              <img src={mail} alt="contact" />
            </div>
          </Col>
          <Col xs={8} className="contact-col-right">
            <div id="bottomContact">
              <Col xs={12} md={6} className="contact-col-right">
                <div>
                  <img
                    src="https://res.cloudinary.com/dii3cculv/image/upload/v1631648362/me_tc5v5j.jpg"
                    alt="me"
                    style={{ height: '140px', borderRadius: '100px' }}
                  />
                </div>
                <span
                  style={{
                    padding: '30px',
                    fontSize: '24px',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                  }}
                >
                  Magdalena Kolaniak
                </span>
                <div
                  style={{
                    width: '350px',
                    padding: '10px',
                    backgroundColor: '#e76f51ff',
                    marginBottom: '20px',
                    color: 'whitesmoke',
                    textAlign: 'center',
                  }}
                >
                  <FaGoogle style={{ fontSize: '34px', float: 'left' }} />{' '}
                  <span style={{ fontSize: '20px' }}>
                    magda.kolaniak@gmail.com
                  </span>
                </div>
                <div
                  style={{
                    width: '350px',
                    padding: '10px',
                    backgroundColor: '#e76f51ff',
                    marginBottom: '20px',
                    color: 'whitesmoke',
                    textAlign: 'center',
                  }}
                >
                  <AiFillGithub style={{ fontSize: '34px', float: 'left' }} />{' '}
                  <span style={{ fontSize: '20px' }}>@magdakolaniak</span>
                </div>
                <div
                  style={{
                    width: '350px',
                    padding: '10px',
                    backgroundColor: '#e76f51ff',
                    marginBottom: '20px',
                    color: 'whitesmoke',
                    textAlign: 'center',
                  }}
                >
                  <AiFillLinkedin style={{ fontSize: '34px', float: 'left' }} />{' '}
                  <span style={{ fontSize: '20px' }}>magda-kolaniak</span>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Contact;
