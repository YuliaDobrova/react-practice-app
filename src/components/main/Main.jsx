import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Container from '../container/Container';
import Loader from '../shared/loader/Loader';
import mainRoutes from '../../routes/mainRoutes';
import './Main.css';
import PostsIdPage from '../../pages/PostsIdPage';

const Main = () => {
  return (
    <main className="Main">
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            {mainRoutes.map(route => (
              <Route
                path={route.path}
                element={route.element}
                key={route.name}
              />
            ))}
            <Route path="/posts/:id" element={<PostsIdPage />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </Suspense>
      </Container>
    </main>
  );
};

export default Main;
