import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';
import { MainContext } from '../GlobalState/GlobalState';
import { useContext, useEffect } from 'react';

const Skills = () => {
  const { skills } = useContext(MainContext);
  useEffect(() => {
    if (skills === true) {
      let pageBottom = document.getElementById('bottom-skills');
      console.log(pageBottom);
      pageBottom.scrollIntoView(true);
    }
  }, [skills]);

  return (
    <>
      <Container
        className="skills-main"
        style={{ display: skills === true ? 'block' : 'none' }}
      >
        <Row>
          <Col xs={4} className="column-left-skills">
            <div className="skills-wrapper">Skills here</div>
          </Col>
          <Col xs={8}>
            <div>My skills...</div>
            <div id="bottom-skills">
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
export default Skills;
