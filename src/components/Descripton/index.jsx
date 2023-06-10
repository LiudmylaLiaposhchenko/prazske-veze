import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

const Description = ({ subtitle, bigdescription }) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        {subtitle}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {bigdescription}
      </Typography>
    </>
  );
};

export default Description;
