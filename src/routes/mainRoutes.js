import HomePage from '../pages/HomePage';
import PostsPage from '../pages/PostsPage';
import TodoPage from '../pages/TodoPage';
import FunctionalPage from '../pages/FunctionalPage';

const mainRoutes = [
  {
    name: 'Home',
    path: '/home',
    element: <HomePage />,
  },
  {
    name: 'Posts',
    path: '/posts',
    element: <PostsPage />,
  },
  {
    name: 'Todo',
    path: '/todo',
    element: <TodoPage />,
  },
  {
    name: 'Functional',
    path: '/functional',
    element: <FunctionalPage />,
  },
];

export default mainRoutes;
