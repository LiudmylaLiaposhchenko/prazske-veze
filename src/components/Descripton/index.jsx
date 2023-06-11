import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

const Description = ({ subtitle1, subtitle2, bigdescription }) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        {subtitle1}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {subtitle2}
      </Typography>
      {bigdescription.map((text, i) => (
        <Typography variant="body1" gutterBottom key={i}>
          {text}
        </Typography>
      ))}
    </>
  );
};

export default Description;
