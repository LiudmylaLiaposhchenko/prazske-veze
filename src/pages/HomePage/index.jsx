import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const [isOn, setIsOn] = useState(true);
  const { t, i18n } = useTranslation();

  return (
    <>
      <header>
        <section className="image-section">
          <h1>{t('title')}</h1>
          <div className="language-buttons">
            <button
              className={
                isOn
                  ? 'language-buttons__button '
                  : 'language-buttons__button language-buttons__button--selected'
              }
              onClick={() => {
                i18n.changeLanguage('cs');
                setIsOn(!isOn);
              }}
            >
              CZ
            </button>
            <button
              className={
                isOn
                  ? 'language-buttons__button language-buttons__button--selected'
                  : 'language-buttons__button '
              }
              onClick={() => {
                i18n.changeLanguage('en');
                setIsOn(!isOn);
              }}
            >
              EN
            </button>
          </div>
        </section>
        <section className="introduction">
          <p>{t('about')}</p>
          <p>{t('invite')}</p>
          <a href="#">{t('go')}</a>
        </section>
      </header>
    </>
  );
};
