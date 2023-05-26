import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { useTranslation } from 'react-i18next';
import './i18n';

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>React webová aplikace</h1>
      </header>
      <main>
        {t('Welcome to React')}
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí
          <a href="https://www.npmjs.com/package/create-czechitas-app">
            create-czechitas-app
          </a>
          .
        </p>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
