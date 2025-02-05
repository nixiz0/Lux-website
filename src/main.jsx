import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Presentation from './pages/Presentation.jsx';
import Tools from './pages/Tools.jsx';
import Help from './pages/Help.jsx';

import './css-style/index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Presentation />,
  },
  {
    path: '/tools',
    element: <Tools />,
  },
  {
    path: '/help',
    element: <Help />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)