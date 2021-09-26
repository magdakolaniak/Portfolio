import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Work.css';
import { MainContext } from '../GlobalState/GlobalState';
import { useContext, useEffect } from 'react';
import code from '../assets/code-black.png';
import { GiGrapes } from 'react-icons/gi';

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
            <div className="work-wrapper">
              <img src={code} alt="work" style={{ height: '80px' }} />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className="header-projects">My projects</div>
            <div id="myProjectsDiv" style={{ marginTop: '15px' }}>
              <div>
                <GiGrapes style={{ paddingBottom: '10px', fontSize: '46px' }} />
                <span style={{ fontSize: '26px' }}> WhatWine?</span>
              </div>
              <div
                style={{
                  marginRight: '20px',
                  marginTop: '15px',
                  marginBottom: '15px',
                }}
              >
                My solo Capstone Project.<br></br>
                Effect of 6 weeks free solo ride with all skills learned during
                6 months.<br></br>
                Piece of work I'm really proud of.<br></br> Platform for
                everyone who wants to discover more about Wine, get
                reccomendations, daily tips and have a{' '}
                <strong>Perosnal Sommelier</strong> at home
              </div>
              <Row className="work-screens-row">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img
                      src="https://res.cloudinary.com/dii3cculv/image/upload/v1632672385/Screenshot_2021-09-26_at_18.04.56_nxjmtw.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="https://res.cloudinary.com/dii3cculv/image/upload/v1632672401/Screenshot_2021-09-26_at_18.05.21_e2vvp7.png"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="https://res.cloudinary.com/dii3cculv/image/upload/v1632672424/Screenshot_2021-09-26_at_18.05.42_p8al5u.png"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Row>
              <Row className="work-button-row" style={{ marginBottom: '20px' }}>
                <Col xs={6} className="d-flex justify-content-center">
                  <div
                    className="buttons-work--1"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://what-wine.vercel.app/', '_blank');
                    }}
                  >
                    Demo
                  </div>
                </Col>
                <Col xs={6} className="d-flex justify-content-center">
                  {' '}
                  <div
                    className="buttons-work--2"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        'https://github.com/magdakolaniak/WhatWine.git',
                        '_blank'
                      );
                    }}
                  >
                    Source code
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Work;
