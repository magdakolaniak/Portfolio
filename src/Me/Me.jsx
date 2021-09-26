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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod
              numquam officiis, perspiciatis maiores, iste alias sint corrupti
              asperiores adipisci tempora, culpa earum officia? Cumque
              voluptates magnam ratione eos optio? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ex nulla beatae necessitatibus id
              repudiandae, est ratione magnam. Quibusdam assumenda odio
              voluptatem tenetur omnis tempora ipsa facilis voluptatibus sit,
              libero architecto?
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Me;
