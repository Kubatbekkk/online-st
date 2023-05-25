import React, { useState } from 'react';
import './styles.scss';
import Card from './Card';
import { products } from '../../data/products';

const CardList = () => {
  return (
    <section className="pictures-list">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </section>
  );
};

export default CardList;
