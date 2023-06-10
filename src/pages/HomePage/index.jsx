import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { HeaderHomePage } from '../../components/HeaderHomePage';
import { Main } from '../../components/Main';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderHomePage />
      <Main />
    </>
  );
};
