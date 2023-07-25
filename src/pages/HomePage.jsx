import React, { useState } from 'react';
import EarthAnimation from '../components/earthAnimation/EarthAnimation';
import Hero from '../components/hero/Hero';
import Title from '../components/title/Title';
import photo from '../images/Yulia.png';
import Modal from '../components/shared/modal/Modal';
import ShiningBtn from '../components/shiningBtn/ShiningBtn';

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
        <hr style={{ margin: 15 }} />
        <p style={{ textAlign: 'center' }}>
          The best way to practice and improve React skills is to create an
          application on your own.
        </p>
        <hr style={{ margin: 15 }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ShiningBtn />
          <div
            style={{
              height: 80,
              marginLeft: 10,
            }}
          >
            <img
              src={photo}
              alt="Yulia"
              width="100"
              height="100"
              style={{ borderRadius: '20%', cursor: 'pointer' }}
              onClick={() => {
                setModalPhotoActive(true);
              }}
            />
          </div>
        </div>
        <Modal active={modalPhotoActive} setActive={setModalPhotoActive}>
          <img
            className="photo-list-img-large"
            src={photo}
            width="150"
            height="150"
            alt="myPhoto"
          />
        </Modal>
        <hr style={{ margin: 15 }} />
        <EarthAnimation />
      </div>
    </>
  );
};

export default HomePage;
