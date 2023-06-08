import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { Card } from '../Card';

export const Main = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="cards-container">
      <Card
        photo={'../../../towers-photo/staromestska.jpg'}
        name={t('card.name.tower1')}
        description={t('card.description.tower1')}
        detail={t('card.detail.tower1')}
      />
      <Card
        photo={'../../../towers-photo/Klementinum.jpg'}
        name={t('card.name.tower1')}
        description={t('card.description.tower1')}
        detail={t('card.detail.tower1')}
      />
    </main>
  );
};
