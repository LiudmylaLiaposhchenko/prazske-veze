import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { CardDetail } from './CardDetail';

export const Card = ({ photo, name, description, price }) => {
  const { t, i18n } = useTranslation();

  return (
    <section className="card-container">
      <img className="card-photo" src={photo} alt={name} />
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className="card-text">{description}</p>
        <CardDetail
          price={price}
          construction={t('card.detail.construction')}
          location={t('card.detail.location')}
        />
      </div>
    </section>
  );
};
