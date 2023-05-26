import React from 'react';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <header>
        <section className="image-section">
          <h1>Podivej se na Prahu zhora</h1>
          <div className="language-buttons">
            <button className="language-buttons__button ">CZ</button>
            <button className="language-buttons__button language-buttons__button--selected">
              EN
            </button>
          </div>
        </section>
        <section className="introduction">
          <p>
            Vítáme v Praze! Máme tady stovky vež, a pravě veže dělají obraz
            města.
          </p>
          <p>Přijďte se na ně podivat a užijte si malebný výhled!</p>
          <a href="#">Naplanovát si exkurze ↓</a>
        </section>
      </header>
    </>
  );
};
