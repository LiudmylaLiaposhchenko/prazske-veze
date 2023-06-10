import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

const Description = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </>
  );
};

export default Description;
