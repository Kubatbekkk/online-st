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

  const handleCartItem = async (id, type) => {
    if (type === 'add') {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      response.status === 200 ? setCart((prev) => [...prev, id]) : undefined;
      setTimeout(() => setLoading(false), 500);
    } else if (type === 'del') {
      setLoading(true);
      setCart((prev) => prev.filter((i) => i !== id));
      setTimeout(() => setLoading(false), 500);
    } else {
      throw new Error('Something went wrong.');
    }
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
            {loading ? (
              <button className="btn btn--buy">
                <Loader className="loader-animate" />
              </button>
            ) : isItemInCart ? (
              <button
                className="btn btn--buy"
                onClick={() => handleCartItem(id, 'del')}
              >
                ✓ В корзине
              </button>
            ) : (
              <button
                className="btn btn--buy"
                onClick={() => handleCartItem(id, 'add')}
              >
                Купить
              </button>
            )}
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
