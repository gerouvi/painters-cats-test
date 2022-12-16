import heartOutlined from '../../svg/heartOutlined.svg';
import heartFilled from '../../svg/heartFilled.svg';

import { useState } from 'react';
import style from './Card.module.css';

const Card = ({ name, phone, email, image, favoured }) => {
  const [isFavoured, setIsFavoured] = useState(favoured);

  const toogleFavoured = () => setIsFavoured((prev) => !prev);

  return (
    <article className={style.card}>
      <div className={style.cardHeader}>
        <img src={image.url} alt={image.alt} className={style.cardImg} />
        <button className={style.heart} onClick={toogleFavoured}>
          {isFavoured ? (
            <img src={heartFilled} alt="filled heart" />
          ) : (
            <img src={heartOutlined} alt="outline heart" />
          )}
        </button>
      </div>
      <div className={style.cardContent}>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </article>
  );
};

export default Card;
