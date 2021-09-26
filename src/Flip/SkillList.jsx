import {
  DiMongodb,
  DiCss3,
  DiBootstrap,
  DiReact,
  DiNpm,
  DiJavascript,
  DiVisualstudio,
  DiNodejs,
} from 'react-icons/di';
import { Col } from 'react-bootstrap';
import './SkillList.css';

const SkillList = () => {
  return (
    <>
      <Col xs={6} className="column">
        <DiReact
          className="skills-icons"
          style={{ stroke: '#60DBFB', strokeWidth: '0.5px' }}
        />
        <DiMongodb className="skills-icons" style={{ color: '#4FAA40' }} />
        <DiNodejs className="skills-icons2" style={{ color: 'black' }} />
        <DiCss3 className="skills-icons" style={{ color: '#0070B9' }} />
      </Col>

      <Col xs={6} className="column">
        <DiBootstrap className="skills-icons" style={{ color: '#8311F9' }} />
        <DiNpm
          className="skills-icons"
          style={{ stroke: '#CC3533', strokeWidth: '0.5px' }}
        />
        <DiVisualstudio className="skills-icons" style={{ color: '#0078BA' }} />
        <DiJavascript className="skills-icons" style={{ color: '#63A714' }} />
      </Col>
    </>
  );
};
export default SkillList;
