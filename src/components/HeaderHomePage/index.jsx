import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

export const HeaderHomePage = () => {
  const [isOn, setIsOn] = useState(true);
  const { t, i18n } = useTranslation();

  return (
    <>
      <header id="header" className="header-homepage">
        <section className="image-section">
          <h1>{t('header.title')}</h1>
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
          <p>{t('header.about')}</p>
          <p>{t('header.invite')}</p>
          <a href="#sort-panel">{t('header.go')}</a>
        </section>
      </header>
    </>
  );
};
