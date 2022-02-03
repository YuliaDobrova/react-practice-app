import React from 'react';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ images, addLargeImg }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} {...image} addLargeImg={addLargeImg} />
      ))}
    </ul>
  );
};

export default ImageGallery;
