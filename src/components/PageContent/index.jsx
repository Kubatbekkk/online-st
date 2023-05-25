import React from 'react';
import './styles.scss';
import CardList from '../CardList';

const PageContent = () => {
  return (
    <main className="main-content">
      <div className="main-content__container">
        <h1 className="main-content__title">Картины эпохи Возрождения</h1>
        <CardList />
      </div>
    </main>
  );
};

export default PageContent;
