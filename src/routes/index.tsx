import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import List from '../pages/list/List';
import Login from '../pages/login/Login';
import New from '../pages/new/New';
import Single from '../pages/single/Single';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // children: [
    /** import Outlet from router-dom and use component as ReactComponent */
    //   { index: true, Component: () => <h1>Blog Index</h1> },
    //   { path: '*', Component: Component },
    // ],
  }, // 🆕
  { path: '/home', element: <Home /> },
  { path: '/list', element: <List /> },
  { path: '/Login', element: <Login /> },
  { path: '/new', element: <New /> },
  { path: '/single', element: <Single /> },
]);

export default router;
