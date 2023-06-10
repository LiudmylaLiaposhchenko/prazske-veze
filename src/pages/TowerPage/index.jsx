import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { HeaderTowerPage } from '../../components/HeaderTowerPage';
import Grid from '@mui/material/Grid';
import Photogalery from '../../components/Photogalery';
import Description from '../../components/Descripton';
import Information from '../../components/Information';
import { towers } from '../../towers';
import { useParams } from 'react-router-dom';

export const TowerPage = () => {
  const { id } = useParams();
  const tower = towers.find((inv) => inv.id === Number(id));

  const { t } = useTranslation();
  return (
    <>
      <HeaderTowerPage name={t(tower.name)} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Photogalery galeryItems={tower.galeryItems} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Description
            subtitle={t(tower.subtitle)}
            bigdescription={t(tower.bigdescription)}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Information />
        </Grid>
      </Grid>
    </>
  );
};
