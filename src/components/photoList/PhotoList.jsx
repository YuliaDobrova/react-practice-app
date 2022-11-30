import React from 'react';
import PhotoItem from './photoItem';
import photos from './data/photos.json';
import './PhotoList.css';

const PhotoList = () => {
  return (
    <>
      <h2 className="photo-list-title">Photo List</h2>
      <p style={{fontStyle:"italic", textAlign:"center", marginBottom: 15}}>Click on the photo to view it in full size in the modal window</p>
      <ul className="photo-list">
        {photos.map(({ imgUrl, title, text, id }) => (
          <PhotoItem imgUrl={imgUrl} title={title} text={text} key={id} />
        ))}
      </ul>
    </>
  );
};

export default PhotoList;
