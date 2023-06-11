import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Card, CardContent, CardHeader } from '@mui/material';

const Line = ({ b }) => {
  return (
    <Grid item xs={12} md={4}>
      {b}
    </Grid>
  );
};

const Operation = ({ time }) => {
  const { t } = useTranslation();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={t('header.operationTitle')}
        titleTypographyProps={{ variant: 'h3' }}
      />
      <CardContent>
        <Grid container spacing={2}>
          {time.map((a) => (
            <>
              <Line b={a[0]} />
              <Line b={a[1]} />
              <Line b={a[2]} />
            </>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Operation;
