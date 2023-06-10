import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { CardDetail } from './CardDetail';
import { useNavigate } from 'react-router-dom';

export const Card = ({
  id,
  photo,
  name,
  description,
  price,
  constructionCentury,
  location,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section
      onClick={() => {
        navigate('/tower/' + id);
      }}
      className="card-container"
    >
      <img className="card-photo" src={photo} alt={name} />
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className="card-text">{description}</p>
        <CardDetail
          price={price}
          constructionCentury={t(constructionCentury)}
          location={t(location)}
        />
      </div>
    </section>
  );
};
