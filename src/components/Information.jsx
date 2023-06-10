import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

const Information = () => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="subtitle1">
            well meaning and kindly.
            <br />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Information;
