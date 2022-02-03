import HomePage from '../pages/HomePage';
import PostsPage from '../pages/PostsPage';
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
    name: 'Posts',
    path: '/posts',
    element: <PostsPage />,
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
    name: 'Posts',
    path: '/posts',
    element: <PostsPage />,
  },
  {
    name: 'Images',
    path: '/images',
    element: <ImagesPage />,
  },
  {
    name: 'Login',
    path: '/login',
    element: <LoginPage />,
  },
];
