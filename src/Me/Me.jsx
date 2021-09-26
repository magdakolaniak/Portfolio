import { Container, Row, Col } from 'react-bootstrap';
import './Me.css';
import { MainContext } from '../GlobalState/GlobalState';
import { useContext, useEffect } from 'react';

const Me = () => {
  const { me } = useContext(MainContext);

  useEffect(() => {
    if (me === true) {
      let pageBottom = document.getElementById('bottom');
      console.log(pageBottom);
      pageBottom.scrollIntoView(true);
    }
  }, [me]);

  return (
    <>
      <Container
        className="me-main"
        style={{ display: me === true ? 'block' : 'none' }}
      >
        <Row>
          <Col xs={12} md={4} className="column-photo">
            <div className="photo-wrapper">
              <img
                src="https://res.cloudinary.com/dii3cculv/image/upload/v1631648362/me_tc5v5j.jpg"
                alt="me"
                style={{ height: '260px', borderRadius: '50px' }}
              />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div>My personal story...</div>
            <div id="bottom">
              Former Sommelier with engineering background. Coding brought me
              mostly an unloved need for continuous development and need to
              prove myself of capability that I can do anything. And it’s a
              magical world- you are a creator, which can also describe me
              perfectly. I love to have an influence, and maybe one day I will
              come up with changing-life solution, which is who I secretly want
              to be.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Me;
