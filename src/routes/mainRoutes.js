import HomePage from '../pages/HomePage';
import PostsPage from '../pages/PostsPage';
import QueryPage from '../pages/QueryPage';
import ChartsPage from '../pages/ChartsPage';
import TodoPage from '../pages/TodoPage';
import FunctionalPage from '../pages/FunctionalPage';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import ImagesPage from '../pages/ImagesPage';

export const privateMainRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'Functional',
    path: '/functional',
    element: <FunctionalPage />,
  },
  {
    name: 'Charts',
    path: '/charts',
    element: <ChartsPage />,
  },
  {
    name: 'Posts',
    path: '/posts',
    element: <PostsPage />,
  },
  {
    name: 'Query',
    path: '/query',
    element: <QueryPage />,
  },
  {
    name: 'Images',
    path: '/images',
    element: <ImagesPage />,
  },
  {
    name: 'Todo',
    path: '/todo',
    element: <TodoPage />,
  },
  {
    name: 'Contacts',
    path: '/contacts',
    element: <ContactsPage />,
  },
];
export const publicMainRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'Functional',
    path: '/functional',
    element: <FunctionalPage />,
  },
  {
    name: 'Images',
    path: '/images',
    element: <ImagesPage />,
  },
  {
    name: 'Posts',
    path: '/posts',
    element: <PostsPage />,
  },
  {
    name: 'Charts',
    path: '/charts',
    element: <ChartsPage />,
  },
  {
    name: 'Query',
    path: '/query',
    element: <QueryPage />,
  },
  {
    name: 'Login',
    path: '/login',
    element: <LoginPage />,
  },
];
