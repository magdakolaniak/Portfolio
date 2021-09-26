import { Container, Row, Col } from 'react-bootstrap';
import './Work.css';
import { MainContext } from '../GlobalState/GlobalState';
import { useContext, useEffect } from 'react';

const Work = () => {
  const { work } = useContext(MainContext);

  useEffect(() => {
    if (work === true) {
      console.log('rendering');
      let pageBottom = document.getElementById('myProjectsDiv');
      console.log(pageBottom);
      pageBottom.scrollIntoView(true);
    }
  }, [work]);

  return (
    <>
      <Container
        className="work-main"
        style={{ display: work === true ? 'block' : 'none' }}
      >
        <Row>
          <Col xs={12} md={4} className="column-left-work">
            <div className="work-wrapper">Projects here</div>
          </Col>
          <Col xs={12} md={8}>
            <div>My projects...</div>
            <div id="myProjectsDiv">
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
export default Work;
