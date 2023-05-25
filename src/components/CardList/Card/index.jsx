import React from 'react';
import './styles.scss';
import { numFormat } from '../../../utils/numFormat';

const Card = ({ img, title, author, oldPrice, newPrice, isAvialable }) => {
  return (
    <div className={`card ${isAvialable || 'card--opacity'}`}>
      <img src={img} alt={title} className="card__img" />
      <h2 className="card__title">
        «{title}» {author}
      </h2>
      <div className="card__footer">
        {isAvialable ? (
          <>
            <div className="card__price">
              {oldPrice && (
                <p className="card__price--old">{numFormat.format(oldPrice)}</p>
              )}
              <p className="card__price--new">{numFormat.format(newPrice)}</p>
            </div>
            <button className="btn btn--buy">Купить</button>
          </>
        ) : (
          <div className="card__price card__price--not">
            <p>Продана на аукционе</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
