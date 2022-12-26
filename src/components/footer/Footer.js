import React from 'react';

import Container from '../container/Container';
import sprite from '../../images/sprite.svg';
import './Footer.css';
import SocialIcons from '../socialIcons/SocialIcons';

const Footer = () => {
  return (
    <footer className="Footer">
      <Container>
        <div className="FooterWrapper">
          <p className="FooterText">©2022 Cteated to improve React skills</p>
          <svg className="FooterIcon" width="24" height="24">
            <use href={sprite + '#icon-react'}></use>
          </svg>
        </div>
        <p className="FooterDeveloperText">
          Designed and developed by{' '}
          {/* <a
            href="https://www.linkedin.com/in/yuliia-dobrova-37a335217/"
            target="_blank"
            rel="noreferrer"
            className="Developer"
          > */}
          <b>
            <i>Yuliia Dobrova</i>
          </b>
          {/* </a> */}
        </p>
        <SocialIcons />
      </Container>
    </footer>
  );
};

export default Footer;
