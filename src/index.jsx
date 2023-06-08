import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { useTranslation } from 'react-i18next';
import './i18n';
import { HomePage } from './pages/Homepage';

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
