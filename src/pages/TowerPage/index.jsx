import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { HeaderTowerPage } from '../../components/HeaderTowerPage';
import Grid from '@mui/material/Grid';
import Photogalery from '../../components/Photogalery';
import Description from '../../components/Descripton';
import Information from '../../components/Information';

export const TowerPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeaderTowerPage />
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Photogalery />
        </Grid>
        <Grid item xs={12} md={7}>
          <Description />
        </Grid>
        <Grid item xs={12} md={5}>
          <Information />
        </Grid>
      </Grid>
    </>
  );
};
