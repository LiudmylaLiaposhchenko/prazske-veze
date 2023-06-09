import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { Card } from '../Card';
import { towers } from '../../towers';

export const Main = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section id="sort-panel" className="sort-panel">
        <div className="sort-buttons">
          <button className="sort-button sort-button--active">
            Rekomendace
          </button>
          <button className="sort-button">Od nejstarší</button>
          <button className="sort-button">Od nejvyšší</button>
          <button className="sort-button">Od nejbližší</button>
        </div>
        <a href="#header">Nahoru ↑</a>
      </section>
      <main className="cards-container">
        {towers.map((tower) => (
          <Card
            key={tower.name}
            photo={tower.photo}
            name={t(tower.name)}
            description={t(tower.description)}
            price={tower.price}
            location={t(tower.location)}
            constructionCentury={t(tower.constructionCentury)}
          />
        ))}
      </main>
    </>
  );
};
