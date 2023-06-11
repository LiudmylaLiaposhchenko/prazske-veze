import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import { Card, CardContent, Rating, Typography } from '@mui/material';

const ReviewItem = ({ name, daysAgo, text, ratingValue }) => {
  const { t } = useTranslation();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Rating name="simple-controlled" value={ratingValue} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {daysAgo}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewItem;
