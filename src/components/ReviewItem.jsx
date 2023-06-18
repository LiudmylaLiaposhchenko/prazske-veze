import React from 'react';
import { Card, CardContent, Rating, Typography } from '@mui/material';

const ReviewItem = ({ authorName, daysAgo, text, ratingValue }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{ padding: '0px' }}>
        <Rating
          sx={{ display: 'flex' }}
          name="simple-controlled"
          value={ratingValue}
        />
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          {authorName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {daysAgo}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'justify' }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewItem;
