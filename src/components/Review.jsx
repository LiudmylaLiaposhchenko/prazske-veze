import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReviewItem from './ReviewItem';
import { Typography } from '@mui/material';

const Review = ({ title, placeId }) => {
  const [mark, setMark] = useState([]);
  const { t } = useTranslation();

  const request = {
    placeid: placeId,
    fields: ['reviews'],
  };
  // const map = new google.maps.Map(document.getElementById('map'), {
  //   center: { lat: 40.7575285, lng: -73.9884469 },
  // });
  // const service = new google.maps.places.PlacesService(map);

  // const saveReviews = (reviews) => {
  //   setMark(reviews);
  // };

  // const processResult = (data, status) => {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     saveReviews(data.reviews);
  //   }
  // };
  // useEffect(() => {
  //   service.getDetails(request, processResult);
  // }, []);

  return (
    <section className="reviewes">
      <div id="map"></div>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      {mark.map(({ author_name, relative_time_description, text, rating }) => (
        <ReviewItem
          name={author_name}
          daysAgo={relative_time_description}
          text={text}
          ratingValue={rating}
        />
      ))}
    </section>
  );
};

export default Review;
