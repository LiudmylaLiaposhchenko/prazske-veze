import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

export const CardDetail = ({ price, construction, location }) => {
  const { t } = useTranslation();
  return (
    <ul className="card-detail">
      <li className="detail">
        <img className="icon" src="/icons/money.png" alt="dolar-symbol" />
        <p>
          {t('card.adult')} {price} {t('card.currency')}
        </p>
      </li>
      <li className="detail">
        <img className="icon" src="/icons/brick.png" alt="brick-symbol" />
        <p>{construction}</p>
      </li>
      <li className="detail">
        <img className="icon" src="/icons/place.png" alt="location-symbol" />
        <p>{location}</p>
      </li>
    </ul>
  );
};
