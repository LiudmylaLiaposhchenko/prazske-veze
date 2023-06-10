import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import './i18n';
import { HomePage } from './pages/Homepage';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { TowerPage } from './pages/Towerpage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />,
    </ThemeProvider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/tower/:id',
    element: <TowerPage />,
  },
]);

createRoot(document.querySelector('#app')).render(<App />);
