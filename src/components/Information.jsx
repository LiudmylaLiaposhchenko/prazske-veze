import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import TextWithIcon from './TextWithIcon';

const Information = () => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="subtitle1">
            {t('header.information')}
            <TextWithIcon
              src={'/icons/money.png'}
              alt={'dolar-symbol'}
              p={t('card.adult')}
            />
            <TextWithIcon
              src={'/icons/place.png'}
              alt={'location-symbol'}
              p={t('card.adult')}
            />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Information;
