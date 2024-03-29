import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderTowerPage } from '../components/HeaderTowerPage';
import Grid from '@mui/material/Grid';
import PhotoGallery from '../components/PhotoGallery';
import Description from '../components/Description';
import Information from '../components/Information';
import { towers } from '../towers';
import { useLocation, useParams } from 'react-router-dom';
import Review from '../components/Review';
import Operation from '../components/Operation';

export const TowerPage = () => {
  const { id } = useParams();
  const tower = towers.find((inv) => inv.id === Number(id));

  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const { t } = useTranslation();
  return (
    <>
      <HeaderTowerPage name={t(tower.name)} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <PhotoGallery galleryItems={tower.galleryItems} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Description
            subtitle1={t(tower.subtitle1)}
            subtitle2={t(tower.subtitle2)}
            bigdescription={t(tower.bigdescription, { returnObjects: true })}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Information
            price={tower.price}
            location={t(tower.location)}
            urlTicket={tower.urlTicket}
            mapUrl={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              t(tower.name),
            )}&query_place_id=${tower.placeId}`}
          />
          <Operation
            time={tower.operation}
            subtitle3={t(tower.subtitle3)}
            subtitle4={t(tower.subtitle4)}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Review />
        </Grid>
      </Grid>
    </>
  );
};
