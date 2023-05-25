import React from 'react';
import './styles.scss';
import { links } from '../../data/nav-links';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar__links">
          {links.map((link) => (
            <li className="navbar__links-item" key={link.name}>
              <a href={link.to}>{link.name}</a>
            </li>
          ))}
        </ul>
        <form className="navbar__search">
          <input
            type="text"
            className="navbar__search-input"
            placeholder="Поиск по названию картины"
          />
          <button className="btn btn--search" onClick={handleSubmit}>
            Найти
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
