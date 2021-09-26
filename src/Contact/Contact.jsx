import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import { MainContext } from '../GlobalState/GlobalState';
import { useContext, useEffect } from 'react';

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
            <div className="contact-wrapper">Contact here</div>
          </Col>
          <Col xs={8}>
            <div>My contacts path...</div>
            <div id="bottomContact">
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
export default Contact;
