import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';

export const HeaderTowerPage = ({ name }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <IconButton
          onClick={() => {
            navigate('/#sort-panel');
          }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
