import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import './Skills.css';
import { MainContext } from '../GlobalState/GlobalState';
import { useContext, useEffect } from 'react';
import img from '../assets/pencil-black.png';
import { TiTick } from 'react-icons/ti';
import { FiGithub } from 'react-icons/fi';
import { GiStrong } from 'react-icons/gi';

const Skills = () => {
  const { skills } = useContext(MainContext);
  useEffect(() => {
    if (skills === true) {
      let pageBottom = document.getElementById('bottom-skills');
      console.log(pageBottom);
      pageBottom.scrollIntoView(true);
    }
  }, [skills]);
  const handleOpen = (e) => {
    e.preventDefault();
    let link = e.currentTarget.id;
    window.open(`${link}`, '_blank');
  };
  const showCert = () => {
    let content = document.querySelectorAll('#certificates--all');
    let button = document.getElementById('showHide');
    content.forEach((element) => {
      if (element.style.display === 'flex') {
        element.style.display = 'none';
        button.innerText = 'Show Certificates';
      } else {
        element.style.display = 'flex';
        button.innerText = 'Hide Certificates';
      }
    });
  };
  return (
    <>
      <Container
        className="skills-main"
        style={{ display: skills === true ? 'block' : 'none' }}
      >
        <Row>
          <Col xs={4} className="column-left-skills">
            <div className="skills-wrapper">
              <img src={img} alt="skills" />
            </div>
          </Col>
          <Col xs={8}>
            <div className="header--skills">My skills...</div>
            <div
              id="bottom-skills"
              style={{ marginTop: '15px', marginBottom: '15px' }}
            >
              I'm very happy that you've reached here!
              <br></br>
              Feel free to discover all my assets, which I can bring into the
              company!
              <GiStrong
                style={{
                  fontSize: '40px',
                  paddingBottom: '10px',
                  color: '#279eb2',
                }}
              />
            </div>
            <Row>
              <Tabs id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="soft-skills" title="Soft Skills">
                  <ul id="list-indicators">
                    <li>
                      <TiTick className="tick-icon--skills" /> Passionate about
                      things I'm currently working on
                    </li>
                    <li>
                      <TiTick className="tick-icon--skills" /> Good team player
                    </li>
                    <li>
                      <TiTick className="tick-icon--skills" /> Problem-solving
                      abillities & critical-thinking
                    </li>
                    <li>
                      <TiTick className="tick-icon--skills" /> Fullly motivated,
                      devoted to work and passionate about discovering new
                      things
                    </li>
                    <li>
                      <TiTick className="tick-icon--skills" /> Creative and
                      thirsty of knowledge
                    </li>
                  </ul>
                </Tab>
                <Tab eventKey="languages" title="Languages">
                  <ul id="list-indicators">
                    <li>
                      <TiTick className="tick-icon--skills" />{' '}
                      <strong>Polish</strong> as my native language
                    </li>
                    <li>
                      <TiTick className="tick-icon--skills" />{' '}
                      <strong>English</strong> advanced level of proficiency
                    </li>
                    <li>
                      <TiTick className="tick-icon--skills" />{' '}
                      <strong>Italian</strong> basic level of proficiency
                    </li>
                  </ul>
                </Tab>
                <Tab
                  eventKey="tech-skills"
                  title="Tech skills"
                  style={{ margin: '20px' }}
                >
                  Despite the ones I mentioned above (in which I feel the most
                  confident and free), please see also everything I have leraned
                  duirng my intensive 6-month yourney in Strive School. All
                  mentioned technologies were put in practic straight away,
                  which you can see visiting my GitHub Profile.
                </Tab>
              </Tabs>
              <Row
                className="certificates-row"
                style={{ marginBottom: '20px' }}
              >
                <span
                  className="buttons-skills--1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/magdakolaniak', '_blank');
                  }}
                >
                  Go to GitHub <FiGithub style={{ marginLeft: '3px' }} />
                </span>
                <span
                  className="buttons-skills--2"
                  id="showHide"
                  onClick={showCert}
                >
                  Show Certificates
                </span>
              </Row>
            </Row>

            <Row className="certificates-row" id="certificates--all">
              <Col>
                <img
                  src="https://res.cloudinary.com/dii3cculv/image/upload/v1632662918/firstt_cer_emgt84.svg"
                  alt="first-cer"
                  id="https://strive.school/certificate/6054681263580c0017eb01e6"
                  onClick={handleOpen}
                />
              </Col>
              <Col>
                <img
                  src="https://res.cloudinary.com/dii3cculv/image/upload/v1632663094/second-cer_qywuue.svg"
                  alt="second-cer"
                  id="https://strive.school/certificate/606c138530e0a900177eded6"
                  onClick={handleOpen}
                />
              </Col>
              <Col>
                {' '}
                <img
                  src="https://res.cloudinary.com/dii3cculv/image/upload/v1632663126/third-cer_kpjnki.svg"
                  alt="third-cer"
                  id="https://strive.school/certificate/60827f5b9c5416001751dcb6"
                  onClick={handleOpen}
                />
              </Col>
            </Row>
            <Row className="certificates-row" id="certificates--all">
              <Col>
                <img
                  src="https://res.cloudinary.com/dii3cculv/image/upload/v1632663172/fourth-cer_bgskwi.svg"
                  alt="fourth-cer"
                  onClick={handleOpen}
                  id="https://strive.school/certificate/6094f99bae64130017543afa"
                />
              </Col>
              <Col>
                <img
                  src="https://res.cloudinary.com/dii3cculv/image/upload/v1632663203/fifth-cer_mae99z.svg"
                  alt="fifth-cer"
                  id="https://strive.school/certificate/60c31751a7a7290017f15237 "
                  onClick={handleOpen}
                />
              </Col>
              <Col>
                {' '}
                <img
                  src="https://res.cloudinary.com/dii3cculv/image/upload/v1632663248/sixth-cer_txtxee.svg"
                  alt="sixth-cer"
                  id="https://strive.school/certificate/60deda7a6b2e0e00172b7ca5"
                  onClick={handleOpen}
                />
              </Col>
            </Row>
            <Row className="certificates-row" id="certificates--all">
              <Col>
                <img
                  src="https://res.cloudinary.com/dii3cculv/image/upload/v1632663277/seventh-cer_blptfm.svg"
                  alt="seventh-cer"
                  id="https://strive.school/certificate/60f93b95a5a86200179b0165"
                  onClick={handleOpen}
                />
              </Col>
              <Col>
                <img
                  id="https://strive.school/certificate/614b912635ac8d00185eb337"
                  src="https://res.cloudinary.com/dii3cculv/image/upload/v1632664705/grad-cert_lzfww0.svg"
                  alt="grad-cer"
                  onClick={handleOpen}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Skills;
