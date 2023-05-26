import React, { useState, useEffect } from 'react';
import './styles.scss';
import { numFormat } from '../../../utils/numFormat';
import Loader from '../../../components/Loader';

const Card = ({ id, img, title, author, oldPrice, newPrice, isAvialable }) => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem('cart')) || []
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleCartItem = async (id) => {
    setLoading(true);
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    response.status === 200 ? setCart((prev) => [...prev, id]) : undefined;
    setLoading(false);
  };

  const isItemInCart = cart.some((s) => s === id);

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
            <button className="btn btn--buy" onClick={() => handleCartItem(id)}>
              {/* {loading ? (
                <img
                  src={loaderIcon}
                  alt="loading"
                  className="card__loader-img"
                />
              ) : isItemInCart ? (
                'В корзине'
              ) : (
                'Купить'
              )} */}
              <Loader className="loader-animate" />
            </button>
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
