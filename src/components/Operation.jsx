import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Card, CardContent, CardHeader, Typography } from '@mui/material';

const Line = ({ b }) => {
  return (
    <Grid item xs={12} md={4}>
      {b}
    </Grid>
  );
};

const Operation = ({ time, subtitle3, subtitle4 }) => {
  const { t } = useTranslation();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={t('towerPage.operationTitle')}
        titleTypographyProps={{ variant: 'h3' }}
      />
      <CardContent>
        <Grid container spacing={2} sx={{ paddingBottom: '10px' }}>
          {time.map((a, i) => {
            let month;
            if (!a[0] && !a[1]) {
              month = '';
            } else if (!a[1]) {
              month = t('towerPage.month' + a[0]);
            } else {
              month =
                t('towerPage.month' + a[0]) + '-' + t('towerPage.month' + a[1]);
            }

            let day = a[3]
              ? t('towerPage.day' + a[2]) + '-' + t('towerPage.day' + a[3])
              : t('towerPage.day' + a[2]);

            return (
              <Fragment key={i}>
                <Line b={month} />
                <Line b={day} />
                <Line b={a[4]} />
              </Fragment>
            );
          })}
        </Grid>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: 'justify' }}
          gutterBottom
        >
          {subtitle3}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: 'justify' }}
          gutterBottom
        >
          {subtitle4}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Operation;
