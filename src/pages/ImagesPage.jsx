import React, { useContext } from 'react';
import ImageFinder from '../components/imageFinder/ImageFinder';
import { AuthContext } from '../components/context';

const ImagesPage = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      {isAuth ? (
        <div>
          <ImageFinder />
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>
          User is NOT autorized. <br /> Go to the API page.
        </p>
      )}
    </>
  );
};

export default ImagesPage;
