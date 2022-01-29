import React, { useState } from 'react';
import Modal from '../../shared/modal/Modal';
import './PhotoItem.css';

const PhotoItem = ({ imgUrl, title, text, setModalActive }) => {
  const [modalPhotoActive, setModalPhotoActive] = useState(false);
  return (
    <>
      <li className="photo-list-item">
        <img
          onClick={() => {
            setModalPhotoActive(true);
          }}
          className="photo-list-img"
          src={imgUrl}
          alt={text}
        />
        <h4 className="photo-list-item-title">{title}</h4>
        <p className="photo-list-item-text">{text}</p>
      </li>
      <Modal active={modalPhotoActive} setActive={setModalPhotoActive}>
        <img className="photo-list-img-large" src={imgUrl} alt={text} />
      </Modal>
    </>
  );
};

export default PhotoItem;
