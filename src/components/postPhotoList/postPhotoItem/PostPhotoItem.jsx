import React, { useState } from 'react';
import Modal from '../../shared/modal/Modal';
import './PostPhotoItem.css';

const PostPhotoItem = ({ imgUrl, title, text, setModalActive }) => {
  const [modalPhotoActive, setModalPhotoActive] = useState(false);
  return (
    <>
      <li className="post-list-item">
        <img
          onClick={() => {
            setModalPhotoActive(true);
          }}
          className="post-list-img"
          src={imgUrl}
          alt={text}
          width="200"
          height="150"
        />
        <h4 className="post-list-item-title">{title}</h4>
        <p className="post-list-item-text">{text}</p>
      </li>
      <Modal active={modalPhotoActive} setActive={setModalPhotoActive}>
        {/* <div className="post-list-img-large-wrapper"> */}
        <img className="post-list-img-large" src={imgUrl} alt={text} />
        {/* </div> */}
      </Modal>
    </>
  );
};

export default PostPhotoItem;
