import './Welcome.css';
import { Container, Row, Col } from 'react-bootstrap';

const Welcome = () => {
  return (
    <>
      <Container id="welcome-bubble">
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <div className="bubble-wrapper">
              <div className="bubble-text">
                Hi, I'm Magda
                <img
                  src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                  style={{ width: '30px', paddingBottom: '15px' }}
                  alt="hand"
                />
                <br></br>
                Nice to meet you!
                <img
                  src="https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/handshake.gif"
                  style={{ width: '80px', paddingBottom: '10px' }}
                  alt="hand"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Welcome;
