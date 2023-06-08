import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

export const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />
      <Main />
    </>
  );
};
