import React from 'react';

import Container from '../container/Container';
import AppRouter from '../router/AppRouter';
import './Main.css';

const Main = () => {
  return (
    <main className="Main">
      <Container>
        <AppRouter />
      </Container>
    </main>
  );
};

export default Main;
