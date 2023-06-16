import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Card, CardContent, CardHeader } from '@mui/material';
import TextWithIcon from './TextWithIcon';

const Information = ({ price, location, urlTicket, mapUrl }) => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          title={t('towerPage.information')}
          titleTypographyProps={{ variant: 'h3' }}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextWithIcon src="/icons/money.png" alt="dollar-symbol">
                {t('card.adult')} {price} {t('card.currency')}
              </TextWithIcon>
            </Grid>

            <Grid item xs={12} md={6}>
              <a style={{ color: '#fc7620' }} href={urlTicket} target="_blank">
                {t('towerPage.bayTicket')}
              </a>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextWithIcon src="/icons/place.png" alt="location-symbol">
                {location}
              </TextWithIcon>
            </Grid>
            <Grid item xs={12} md={6}>
              <a style={{ color: '#fc7620' }} href={mapUrl} target="_blank">
                {t('towerPage.showMap')}
              </a>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Information;
