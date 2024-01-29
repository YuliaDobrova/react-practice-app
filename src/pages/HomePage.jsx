import React, { useState } from 'react';
import EarthAnimation from '../components/earthAnimation/EarthAnimation';
import Hero from '../components/hero/Hero';
import Title from '../components/title/Title';
import ShiningBtn from '../components/shiningBtn/ShiningBtn';
import TypingText from '../components/typingText/TypingText';

const HomePage = () => {
  const [modalPhotoActive, setModalPhotoActive] = useState(false);

  return (
    <>
      <Hero />
      <div style={{ paddingBottom: 70 }}>
        <Title />
        <p style={{ textAlign: 'center', marginTop: 10 }}>
          is a Declarative & Component-Based library that creates magic!
        </p>
        <p style={{ textAlign: 'center' }}>
          The best way to practice and improve React skills is to create an
          application on your own.
        </p>

        <TypingText />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <ShiningBtn />
        </div>
        <EarthAnimation />
      </div>
    </>
  );
};

export default HomePage;
