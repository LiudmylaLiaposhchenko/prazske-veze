import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import './i18n';
import { HomePage } from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TowerPage } from './pages/TowerPages';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
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
