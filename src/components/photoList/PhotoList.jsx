import React from 'react';
import PhotoItem from './photoItem';
import photos from './data/photos.json';
import './PhotoList.css';

const PhotoList = () => {
  return (
    <>
      <h2 className="photo-list-title">Photo List</h2>
      <ul className="photo-list">
        {photos.map(({ imgUrl, title, text, id }) => (
          <PhotoItem imgUrl={imgUrl} title={title} text={text} key={id} />
        ))}
      </ul>
    </>
  );
};

export default PhotoList;
