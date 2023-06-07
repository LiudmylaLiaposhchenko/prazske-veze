import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

export const Detail = ({ ticket, construction, location }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="card-detail">
      <div className="detail">
        <img className="icon" src="/icons/money.png" alt="dolar-symbol" />
        <h5>{ticket}</h5>
      </div>
      <div className="detail">
        <img className="icon" src="/icons/brick.png" alt="brick-symbol" />
        <h5>{construction}</h5>
      </div>
      <div className="detail">
        <img className="icon" src="/icons/place.png" alt="location-symbol" />
        <h5>{location}</h5>
      </div>
    </div>
  );
};
