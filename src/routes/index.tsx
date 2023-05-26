import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home/Home';
import List from '../pages/list/List';
import Login from '../pages/login/Login';
import New from '../pages/new/New';
import Single from '../pages/single/Single';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      /** import Outlet from router-dom and use component as ReactComponent */
      // { index: true, Component: () => <h1>Blog Index</h1> },
      // { path: 'list', element: <List /> },
    ],
    errorElement: <div>Nenhuma página encontrada</div>,
  },
  { path: '/users', element: <List /> },
  { path: '/users/new', element: <New /> },
  { path: '/users/:userId', element: <Single /> },
  { path: '/login', element: <Login /> },
  { path: '/product', element: <List /> },
  { path: '/product/new', element: <New /> },
  { path: '/product/:userId', element: <Single /> },
]);

export default router;
