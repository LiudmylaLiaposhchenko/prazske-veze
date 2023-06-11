import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';

const TextWithIcon = ({ src, alt, children }) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={12} md={6}>
      <li className="detail">
        <img className="icon" src={src} alt={alt} />
        <p>{children}</p>
      </li>
    </Grid>
  );
};

export default TextWithIcon;
