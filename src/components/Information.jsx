import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Grid, Card, CardContent, CardHeader } from '@mui/material';

import TextWithIcon from './TextWithIcon';

const Information = ({ price, location, urlTicket }) => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          title={t('header.information')}
          titleTypographyProps={{ variant: 'h3' }}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <TextWithIcon src="/icons/money.png" alt="dollar-symbol">
                {t('card.adult')} {price} {t('card.currency')}
              </TextWithIcon>
            </Grid>

            <Grid item xs={12} md={4}>
              <a href={urlTicket}>Koupít vstupenku</a>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextWithIcon src="/icons/place.png" alt="location-symbol">
                {location}
              </TextWithIcon>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Information;
