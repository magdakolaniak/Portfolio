import { Container, Row, Col } from 'react-bootstrap';
import './Me.css';
import { MainContext } from '../GlobalState/GlobalState';
import { useContext, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';

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
                className="me-photo"
              />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className="header--me">My personal story...</div>
            <div id="bottom" className="description-me">
              <strong> Long story short:</strong>
              <br></br> Former Sommelier with engineering background.
              <br></br>
              <div className="fragment-1">
                In fact, after graduating from Univesity, where I achieved an
                enginnering title, I dive into hospitality industry.
              </div>
              <div>
                <ul className="me-list">
                  <li>
                    <AiFillStar className="star-icon" />
                    Managing winner's of the Polish edition of Top Chef
                    restaurant
                  </li>
                  <li>
                    <AiFillStar className="star-icon" />
                    Sailing in European waters on a passenger ship
                  </li>
                  <li>
                    <AiFillStar className="star-icon" />
                    Ending up being a Sommelier in one of The Best Restaurants
                    in the World
                  </li>
                </ul>
                <div className="fragment-1">
                  Pandemic made me re-think of my future, and I was forced to
                  change my career path once again
                </div>
              </div>
              <div className="fragment-1">
                I end up in amazing School, lead by real proffesionalists. I
                fall in love in coding truly! It brings me everyday an unloved
                need for continuous development and need to prove myself of
                capability that I can do anything. And it’s a magical world- you
                are a creator, which can also describe me perfectly. I love to
                have an influence, and maybe one day I will come up with
                changing-life solution, which is who I secretly want to be.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Me;
