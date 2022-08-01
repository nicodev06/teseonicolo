import React from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => (
  <>
    <h2 className="head-text">Take a coffee & chat with me</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card ">
        <img src={images.email} alt="email" />
        <a href="teseonicolo@gmail.com" className="p-text">teseonicolo@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="phone" />
        <a href="tel:+39 (345) 598-2357" className="p-text">+39 (345) 598-2357</a>
      </div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
