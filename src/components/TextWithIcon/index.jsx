import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TextWithIcon = ({ src, alt, p }) => {
  const { t } = useTranslation();
  console.log(src);
  return (
    <li className="detail">
      <img className="icon" src={src} alt={alt} />
      <p>{p}</p>
    </li>
  );
};

export default TextWithIcon;
