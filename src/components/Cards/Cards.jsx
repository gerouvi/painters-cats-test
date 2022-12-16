import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards = ({ paints }) => {
  return (
    <div className={style.petsCardsContainer}>
      {paints.map((paint) => (
        <Card key={paint.id} {...paint} />
      ))}
    </div>
  );
};

export default Cards;
