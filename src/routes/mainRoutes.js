import HomePage from '../pages/HomePage';
import PostsPage from '../pages/PostsPage';
import QueryPage from '../pages/QueryPage';
import ChartsPage from '../pages/ChartsPage';
import TodoPage from '../pages/TodoPage';
import FunctionalPage from '../pages/FunctionalPage';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import ImagesPage from '../pages/ImagesPage';
import BoardPage from '../pages/BoardPage';
import ProjectsPage from '../pages/ProjectsPage';

export const privateMainRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'Projects',
    path: '/projects',
    element: <ProjectsPage />,
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
    name: 'Board',
    path: '/board',
    element: <BoardPage />,
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
    name: 'Projects',
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    name: 'Functional',
    path: '/functional',
    element: <FunctionalPage />,
  },
  {
    name: 'Todo',
    path: '/todo',
    element: <TodoPage />,
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
    name: 'Board',
    path: '/board',
    element: <BoardPage />,
  },

  // {
  //   name: 'Login',
  //   path: '/login',
  //   element: <LoginPage />,
  // },
];
