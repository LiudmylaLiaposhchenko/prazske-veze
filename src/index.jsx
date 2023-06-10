import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import './i18n';
import { HomePage } from './pages/Homepage';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { TowerPage } from './pages/Towerpage';

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/tower',
    element: <TowerPage />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
