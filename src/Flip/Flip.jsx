import './Flip.css';
import { MainContext } from '../GlobalState/GlobalState';
import { useContext } from 'react';
import { TiTick } from 'react-icons/ti';
import ship from '../assets/ship.png';
import dev from '../assets/dev.png';
import eng from '../assets/eng.png';
import somm from '../assets/somm.png';
import globe from '../assets/globe.png';
import SkillList from './SkillList';
import bio from '../assets/biography.png';
import skills from '../assets/pencil.png';
import code from '../assets/code.png';
import mail from '../assets/mail.png';
import qr from '../assets/mycollection.png';
import { BsCaretDownFill } from 'react-icons/bs';

const Flip = (props) => {
  const { setMe, setWork, setSkills, setContact } = useContext(MainContext);

  const handleClick = () => {
    console.log('Clicked');
    if (props.card === 'me') {
      setMe(true);
      setContact(false);
      setSkills(false);
      setWork(false);
    } else if (props.card === 'work') {
      setWork(true);
      setMe(false);
      setContact(false);
      setSkills(false);
    } else if (props.card === 'skills') {
      setSkills(true);
      setContact(false);
      setMe(false);
      setWork(false);
    } else if (props.card === 'contact') {
      setContact(true);
      setMe(false);
      setSkills(false);
      setWork(false);
    }
  };

  return (
    <main className="main" id="main-flip">
      <div className="card-area">
        <div className="card-div">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div
                    className={`card-front__tp card-front__tp--${props.card}`}
                  >
                    <h2 className="card-front__heading">{props.header}</h2>
                    {props.card === 'me' ? (
                      <>
                        <div>
                          <img
                            src={bio}
                            alt="bio"
                            style={{ paddingTop: '15px' }}
                          />
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                    {props.card === 'skills' ? (
                      <>
                        <div>
                          <img
                            src={skills}
                            alt="bio"
                            style={{ paddingTop: '15px' }}
                          />
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                    {props.card === 'work' ? (
                      <>
                        <div>
                          <img
                            src={code}
                            alt="bio"
                            style={{ paddingTop: '15px' }}
                          />
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                    {props.card === 'contact' ? (
                      <>
                        <div>
                          <img
                            src={mail}
                            alt="bio"
                            style={{ paddingTop: '15px' }}
                          />
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className={`card-back card-back--${props.card}`}>
                  {props.card === 'skills' ? <SkillList /> : ''}
                  {props.card === 'me' ? (
                    <>
                      <div>
                        <img src={eng} alt="somm" style={{ height: '40px' }} />
                      </div>
                      <div>
                        <img src={somm} alt="ship" style={{ height: '40px' }} />
                      </div>
                      <div>
                        {' '}
                        <img src={ship} alt="eng" style={{ height: '40px' }} />
                      </div>
                      <div>
                        <img src={dev} alt="globe" style={{ height: '40px' }} />
                      </div>
                      <div>
                        {' '}
                        <img src={globe} alt="dev" style={{ height: '40px' }} />
                      </div>{' '}
                    </>
                  ) : (
                    ''
                  )}
                  {props.card === 'work' ? (
                    <>
                      {' '}
                      <div>
                        <img
                          src="https://res.cloudinary.com/dii3cculv/image/upload/v1632589785/Screenshot_2021-09-25_at_19.08.23_tx2yqv.png"
                          alt="img1"
                          className="portfolio-img-1"
                        />
                      </div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dii3cculv/image/upload/v1632589769/Screenshot_2021-09-25_at_19.08.59_fssnek.png"
                          alt="img2"
                          className="portfolio-img-2"
                        />
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                  {props.card === 'contact' ? (
                    <div>
                      <img
                        src={qr}
                        alt="qr"
                        style={{ width: '160px', marginTop: '60px' }}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>

            <div className="inside-page">
              {' '}
              <div className="inside-page__container">
                <h3
                  className={`inside-page__heading inside-page__heading--${props.card}`}
                >
                  {props.card === 'me' ? 'Get to know me!' : ''}
                  {props.card === 'skills'
                    ? `Everything I've learned so far...`
                    : ''}
                  {props.card === 'work' ? `I'm super happy to share...` : ''}
                  {props.card === 'contact' ? `Do you wish to contact me?` : ''}
                </h3>
                <div
                  className={`inside-page__text inside-page__text--${props.card}`}
                >
                  {props.card === 'work'
                    ? `My Solo Capstone project, which shows my skills and private passion, but see also my other work`
                    : ''}
                  {props.card === 'skills'
                    ? `I can owe my hard work but also amazing teachers in Strive School`
                    : ''}
                  {props.card === 'me' ? (
                    <ul id="list-indicators">
                      <li>
                        <TiTick className="tick-icon" /> An engineer
                      </li>
                      <li>
                        <TiTick className="tick-icon" /> Passionate Sommelier
                      </li>
                      <li>
                        <TiTick className="tick-icon" /> Former sailor
                      </li>
                      <li>
                        <TiTick className="tick-icon" /> Junior web developer
                      </li>
                    </ul>
                  ) : (
                    ''
                  )}
                  {props.card === 'contact'
                    ? `You can use this QR code to get all my Linktree connections, or simply get all in here`
                    : ''}
                  {props.card === 'contact' ? (
                    <div>
                      <BsCaretDownFill
                        style={{ fontSize: '30px', color: '#e76f51ff' }}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div
                  onClick={handleClick}
                  className={`inside-page__btn inside-page__btn--${props.card}`}
                >
                  Reveal more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Flip;
