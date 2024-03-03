import React, { useState } from 'react';
import Modal from '../../components/shared/modal/Modal';
import photo from '../../images/Yulia.png';
import goit from '../../images/goit.png';
import Typed from 'react-typed';
//to install react-typed used this: npm i react-typed --legacy-peer-deps
import './TypingText.css';

const TypingText = () => {
  const [modalPhotoActive, setModalPhotoActive] = useState(false);

  return (
    <>
      <div className="home-info-wrapper">
        <div className="home-info">
          <h4 className="hello">
            Hello, my name is <span className="name">Yuliia Dobrova</span>
          </h4>
          <h5 className="my-profession">
            I'm a{' '}
            <span className="typing">
              {/* ===========Typing-annimation================ */}
              <Typed
                strings={[
                  'Software Developer',
                  'Software Engineer',
                  'Full-stack Developer',
                  'Web Developer',
                  'Javascript Developer',
                  'Front-end Developer',
                  'React Developer',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </span>
          </h5>
          <p className="home-info-text">
            I'm delighted to welcome you to my{' '}
            <span
              style={{
                color: '#61dafb',
              }}
            >
              REACT JS PRACTICE APP
            </span>
            , where knowledge meets opportunity. <br />
          </p>
          <p className="home-info-text">
            Dive into the world of React.js and discover the vast possibilities
            it offers.{' '}
            <span
              style={{
                color: '#61dafb',
              }}
            >
              I'm happy to share my knowledge and insights.
            </span>{' '}
            <br />
            Feel free to explore & learn!
            <br />
            The code to this App in on my{' '}
            <a
              href="https://github.com/YuliaDobrova/react-practice-app"
              target="_blank"
              style={{ textDecoration: 'underline', color: '#61dafb' }}
            >
              GitHub
            </a>{' '}
            Page
          </p>
        </div>
        <div className="home-img ">
          <img
            src={photo}
            alt="Yuliia"
            width="250"
            height="250"
            style={{ borderRadius: '20%', cursor: 'pointer' }}
            onClick={() => {
              setModalPhotoActive(true);
            }}
          />
        </div>
      </div>
      <Modal active={modalPhotoActive} setActive={setModalPhotoActive}>
        <img className="img-large" src={goit} alt="certificate" />
      </Modal>
    </>
  );
};

export default TypingText;
