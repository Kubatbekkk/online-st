import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import addressIcon from '../../assets/icons/address.svg';
import { links } from '../../data/nav-links';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="footer__links">
          {links.map((link) => (
            <li className="footer__links-item" key={link.name}>
              <a href={link.to}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="footer__phone">
          <img src={phoneIcon} alt="phone" />
          <p className="footer__phone-num">+7 (495) 555-55-55</p>
        </div>
        <div className="footer__address">
          <img src={addressIcon} alt="address" />
          <p className="footer__address-text">г. Москва, ул. Расплетина, 24</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
