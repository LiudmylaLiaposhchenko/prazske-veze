import React from 'react';
import { useTranslation } from 'react-i18next';
import ReviewItem from './ReviewItem';
import { CardContent, Card, CardHeader } from '@mui/material';
import { reviewes } from '../reviewes.js';

const Review = () => {
  const { t } = useTranslation();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={t('towerPage.reviewTitle')}
        titleTypographyProps={{ variant: 'h3' }}
      />
      <CardContent>
        {reviewes.map((review) => (
          <ReviewItem
            key={review.text}
            authorName={review.authorName}
            daysAgo={review.relativeTimeDescription}
            text={review.text}
            ratingValue={review.rating}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default Review;
