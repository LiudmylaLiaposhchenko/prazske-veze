import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { Card } from '../Card';
import { towers } from '../../towers';

export const Main = () => {
  const { t, i18n } = useTranslation();

  return (
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
  );
};
