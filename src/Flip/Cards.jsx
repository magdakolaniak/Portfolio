import Flip from './Flip';
import './Cards.css';

const Cards = () => {
  return (
    <>
      <div className="cardsMainCont">
        <Flip card="me" header="About me" />
        <Flip card="skills" header="My skills" />
        <Flip card="work" header="My projects" />
        <Flip card="contact" header="Contact" />
      </div>
    </>
  );
};
export default Cards;
