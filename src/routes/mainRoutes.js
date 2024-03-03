import HomePage from '../pages/HomePage';
import PostsPage from '../pages/PostsPage';
import ChartsPage from '../pages/ChartsPage';
import TodoPage from '../pages/TodoPage';
import FunctionalPage from '../pages/FunctionalPage';
import LoginPage from '../pages/LoginPage';
import ImagesPage from '../pages/ImagesPage';
import ProjectsPage from '../pages/ProjectsPage';
import NoPage from '../pages/NoPage';
import WeatherPage from '../pages/WeatherPage';
import CurrencyPage from '../pages/CurrencyPage';

export const privateMainRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'Weather',
    path: '/weather',
    element: <WeatherPage />,
  },
  {
    name: 'Currency',
    path: '/currency',
    element: <CurrencyPage />,
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
    name: 'NoPage',
    path: '*',
    element: <NoPage />,
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
    name: 'NoPage',
    path: '*',
    element: <NoPage />,
  },

  {
    name: 'Login',
    path: '/login',
    element: <LoginPage />,
  },
];
