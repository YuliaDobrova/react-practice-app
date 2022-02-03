import React, { Suspense, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Loader from '../shared/loader/Loader';
import { publicMainRoutes, privateMainRoutes } from '../../routes/mainRoutes';
import PostsIdPage from '../../pages/PostsIdPage';
import { AuthContext } from '../context';

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  // console.log('isAuth', isAuth);
  return (
    <>
      <Suspense fallback={<Loader />}>
        {isAuth ? (
          <Routes>
            {privateMainRoutes.map(route => (
              <Route
                path={route.path}
                element={route.element}
                key={route.name}
              />
            ))}
            <Route path="/posts/:id" element={<PostsIdPage />} />
            <Route path="/login" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            {publicMainRoutes.map(route => (
              <Route
                path={route.path}
                element={route.element}
                key={route.name}
              />
            ))}
            <Route path="/posts/:id" element={<PostsIdPage />} />
            <Route path="/contacts" element={<Navigate to="/login" />} />
            <Route path="/todo" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </Suspense>
    </>
  );
};

export default AppRouter;
